import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

const dotenv = require("dotenv");

let envfile = ".env";
if (process.env.NODE_ENV) {
  envfile += "." + process.env.NODE_ENV;
}

const result = dotenv.config({
  path: path.resolve(`src/environments/`, envfile),
});

if (result.error) {
  throw result.error;
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [vue()],
  test: {}
})