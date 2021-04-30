import reactRefresh from '@vitejs/plugin-react-refresh';
import {resolve} from 'path';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        open: true,
    },
    resolve: {
        alias: [
            {
                // replace sass @import '~some/package/file.scss'; with @import 'some/package/file.scss';
                find: /^~(.+)/,
                replacement: '$1',
            },
            {find: 'react-vapor', replacement: resolve(__dirname, '..', 'react-vapor/src/Entry.ts')},
            {find: 'coveo-styleguide', replacement: resolve(__dirname, '..', 'vapor')},
        ],
    },
    plugins: [
        reactRefresh(),
        {
            name: 'vite-plugin-transform-markdown',
            transform: (src, id) => {
                if (/\.md$/.test(id)) {
                    return {
                        enforce: 'pre',
                        code: `export default \`${src}\`;`,
                    };
                }
            },
        },
    ],
    define: {
        'process.env': {},
        global: {},
    },
});
