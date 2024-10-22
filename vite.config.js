import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    plugins: [react()],
    build: {
        outDir: "dist", // Ensure the correct output directory
    },
    server: {
        open: true, // Opens the app in the browser automatically on dev
    },
    resolve: {
        alias: {
            "react-router-dom": "react-router-dom",
            "lucide-react": "lucide-react",
        },
        server: {
            historyApiFallback: true, // This enables SPA fallback in development mode
        },
    },
});
