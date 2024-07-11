import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc", // https://github.com/mui/material-ui/issues/26559
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://4.213.74.16/", // 後端伺服器網址
        changeOrigin: true,
        rewrite: (path) => path,
        // rewrite: (path) => path.replace(/^\/api/, ""), // 將 /api 代碼去除，但這個專案不需要
      },
    },
  },
});
