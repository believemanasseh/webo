import type { Config } from "vike/types";
import vikeReact from "vike-react/config";
import vikeReactQuery from "vike-react-query/config";
import vercelConfig from "@vite-plugin-vercel/vike/config";

export default {
  clientRouting: true,
  prerender: false,
  title: "Webo - Right to Ownership",
  favicon: "/webo.png",
  ssr: false,
  extends: [vikeReact, vikeReactQuery, vercelConfig],
  onRenderClient: "import:vike-react/renderer/onRenderClient:onRenderClient",
} satisfies Config;
