import type { Config } from "vike/types";
import vercelConfig from "@vite-plugin-vercel/vike/config";
import vikeReact from "vike-react/config";

export default {
  clientRouting: true,
  prerender: false,
  ssr: false,
  extends: [vercelConfig, vikeReact],
  onRenderClient: "import:vike-react/renderer/onRenderClient:onRenderClient",
} satisfies Config;
