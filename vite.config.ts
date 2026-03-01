import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'another-merchant.local',
    port: 5174,
    https: {
      key: readFileSync(resolve(__dirname, 'certs/another-merchant.local-key.pem')),
      cert: readFileSync(resolve(__dirname, 'certs/another-merchant.local.pem')),
    },
  },
})
