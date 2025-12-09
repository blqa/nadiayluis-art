import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 🚨 ¡IMPORTANTE! Usamos el nombre de tu repositorio
  base: '/nadiayluis-art/',
  plugins: [react()],
})