import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

export default {
  clientRouting: true,
  meta: {
    Page: {
      env: { server: false, client: true }, // SPA for all pages
    },
  },
  extends: [vikeReact],
} satisfies Config;
