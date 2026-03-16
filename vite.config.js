import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  // which means enable react (like the use of jsx)
  plugins: [react()],
  // ubah server run
  server: {
    port: 3000
  }, 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
