import { UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vike from "vike/plugin";
import wyw from "@wyw-in-js/vite";

const config: UserConfig = {
  plugins: [
    react(),
    vike({ prerender: true }),
    wyw({
      include: ["**/*.{ts,tsx}"],
      babelOptions: {
        presets: ["@babel/preset-typescript", "@babel/preset-react"],
      },
    }),
  ],
};
export default config;
