import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/LoginPage/',  // <--- اسم المستودع الخاص بك
  plugins: [react()],
})