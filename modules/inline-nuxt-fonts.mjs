import { defineNuxtModule } from '@nuxt/kit';
import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

async function htmlFiles(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    const files = await Promise.all(entries.map(async (entry) => {
        const path = join(directory, entry.name);

        if (entry.isDirectory()) {
            return htmlFiles(path);
        }

        return entry.name.endsWith('.html') ? [path] : [];
    }));

    return files.flat();
}

const mimeTypes = {
    '.ico': 'image/x-icon',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.woff2': 'font/woff2',
};

async function inlineableAssets(directory, publicDir) {
    const assets = [];

    for (const entry of await readdir(directory, { withFileTypes: true })) {
        const path = join(directory, entry.name);

        if (entry.isDirectory()) {
            assets.push(...await inlineableAssets(path, publicDir));
            continue;
        }

        const extension = entry.name.slice(entry.name.lastIndexOf('.'));
        const mimeType = mimeTypes[extension];

        if (mimeType) {
            assets.push({
                mimeType,
                path,
                url: `/${path.slice(publicDir.length + 1).replaceAll('\\\\', '/')}`,
            });
        }
    }

    return assets;
}

export default defineNuxtModule({
    meta: {
        name: 'inline-nuxt-fonts',
    },
    setup(_, nuxt) {
        // nuxt-single-html only inlines <link> and <script> assets. Replace URLs
        // in inline CSS/HTML with data URIs once that module has run.
        nuxt.hook('nitro:build:public-assets', async (nitro) => {
            const publicDir = nitro.options.output.publicDir;
            const assets = await inlineableAssets(publicDir, publicDir);
            const assetUrls = new Map(await Promise.all(assets.map(async (asset) => [
                asset.url,
                `data:${asset.mimeType};base64,${(await readFile(asset.path)).toString('base64')}`,
            ])));
            const inlinedUrls = new Set();

            for (const file of await htmlFiles(publicDir)) {
                let html = await readFile(file, 'utf8');

                for (const [url, dataUrl] of assetUrls) {
                    if (html.includes(url)) {
                        inlinedUrls.add(url);
                    }
                    html = html.replaceAll(url, dataUrl);
                }

                await writeFile(file, html);
            }

            for (const asset of assets) {
                if (inlinedUrls.has(asset.url)) {
                    await rm(asset.path, { force: true });
                }
            }
        });
    },
});
