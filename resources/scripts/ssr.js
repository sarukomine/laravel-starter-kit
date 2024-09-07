import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp, Link } from '@inertiajs/vue3'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { route } from 'ziggy.js'
import createServer from '@inertiajs/vue3/server'

createServer((page) =>
    createInertiaApp({
        page,
        render: renderToString,
        resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
        setup({ App, props, plugin }) {
            const Ziggy = { 
                // Pull the Ziggy config off of the props.
                ...props.initialPage.props.ziggy,

                // Build the location, since there is no window.location in Node.
                location: new URL(props.initialPage.props.ziggy.url)
            }

            const app = createSSRApp({
                render: () => h(App, props),
            })

            app.use(plugin)
            app.mixin({ 
                methods: {
                    route: (name, params, absolute, config = Ziggy) => route(name, params, absolute, config),
                },
            })

            app.component('Link', Link)

            return app
        },
    }),
)
