import { UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vike from "vike/plugin";
import vercel from "vite-plugin-vercel";
import wyw from "@wyw-in-js/vite";
import path from "path";

const config: UserConfig = {
  plugins: [
    vercel(),
    react(),
    vike({ prerender: { partial: true } }),
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@/assets": path.resolve(__dirname, "./src/assets"),
      "@/components": path.resolve(__dirname, "./src/components"),
      "@/api": path.resolve(__dirname, "./src/api"),
      "@/src": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
  },
};
export default config;
