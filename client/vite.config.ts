import { UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vike from "vike/plugin";
import vercel from "vite-plugin-vercel";
import wyw from "@wyw-in-js/vite";

const config: UserConfig = {
  plugins: [
    vercel(),
    react(),
    vike({
      prerender: { partial: true },
    }),
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@/components": "./src/components",
      "@/assets": "./src/assets",
    },
  },
};
export default config;
