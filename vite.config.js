import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Nike-Sneaker-Frontpage/',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
})
