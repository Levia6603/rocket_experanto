import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://52.163.112.233/", // 後端伺服器網址
        changeOrigin: true,
        rewrite: (path) => path,
        // rewrite: (path) => path.replace(/^\/api/, ""), // 將 /api 代碼去除，但這個專案不需要
      },
    },
  },
});
