import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "0.0.0.0",
      "83a4d415c3b2.ngrok-free.app", // <- reemplaza esto con tu subdominio ngrok actual
    ],
  },
});
