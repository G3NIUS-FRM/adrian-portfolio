import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


//  server: {
//    host: true, 
//    port: 3333, 
//  },
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base:"/Portfolio"
})
