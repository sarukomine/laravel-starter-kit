import { defineConfig, loadEnv } from 'vite'
import { readFileSync } from 'fs'
import laravel from 'laravel-vite-plugin'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

    let config = {
        resolve: {
            alias: {
                'ziggy.js': path.resolve('vendor/tightenco/ziggy'),
            }
        },
        plugins: [
            laravel({
                input: ['resources/css/app.css', 'resources/scripts/app.js'],
                ssr: 'resources/scripts/ssr.js',
                refresh: true,
            }),
            vue(),
        ],
    }

    if (process.env.VITE_APP_ENV === 'local') {
        config.server = {
            https: {
                key: readFileSync(process.env.VITE_HTTPS_KEY),
                cert: readFileSync(process.env.VITE_HTTPS_CERT),
            },
            host: process.env.VITE_APP_DOMAIN,
            hmr: { host: process.env.VITE_APP_DOMAIN },
        }
    }

    return defineConfig(config)
}
