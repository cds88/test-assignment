/// <reference types="vitest" />
/// <reference types="vite/client" />


import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'


export default defineConfig({
  resolve:{
    alias: [
      {find:"@", replacement: '/src'}
    ]
  },
  plugins:[react()],
  test: {
    globals:true,
    environment: 'jsdom',
 
  },
})