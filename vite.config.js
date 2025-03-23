import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/IT-Company-Website-Vue3/',
  css: {
    preprocessorOptions: {
      scss: {
      }
    }
  }
})
