import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

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
