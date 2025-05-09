import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.PNG'], // Add this line to include PNG files

  server: {
    host: '0.0.0.0', // Exposes the server on the network
    port: 5173 // Optional: specify a port if needed
  }
})
