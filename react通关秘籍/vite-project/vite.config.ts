import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // generateScopedName: "guang_[name]__[local]___[hash:base64:5]"
      generateScopedName: function (name, filename, css) {
        console.log(name, filename, css)
  
        return "xxx"
      },
    }
  }
})
