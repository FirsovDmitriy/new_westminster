import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $duration: 300ms;
          $easing: cubic-bezier(0.4, 0, 0.2, 1);
          $radius: 8px;
        `,
      }
    }
  }
})
