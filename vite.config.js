import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { //server adicionado para testar no celular
    host: true, // Permite conexões externas
    port: 5173, // Porta padrão ou escolha outra
  },
})
