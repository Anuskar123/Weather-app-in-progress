// Import defineConfig from Vite
import { defineConfig } from 'vite'
// Import React plugin for Vite
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Export Vite configuration
export default defineConfig({
  // Use React plugin
  plugins: [react()],
})
