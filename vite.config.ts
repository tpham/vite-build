import react from '@vitejs/plugin-react-swc';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        plugins: [react(), dts({ include: ['src'] }), tsconfigPaths()],
        build: {
            minify: false,
        },
        optimizeDeps: {
            esbuildOptions: {
                jsx: "automatic",
                jsxDev: false
            }
        }
    };
});
