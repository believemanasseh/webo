import type { Config } from "vike/types";

export default {
  clientRouting: true,
  hydrationCanBeAborted: true,
  meta: {
    Page: {
      env: { server: false, client: true }, // SPA for all pages
    },
  },
  onRenderClient: "import:vike-react/renderer/onRenderClient:onRenderClient",
} satisfies Config;
