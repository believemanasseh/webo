import type { Config } from "vike/types";
import vikeReact from "vike-react/config";

export default {
  clientRouting: true,
  hydrationCanBeAborted: true,
  prerender: false,
  extends: vikeReact,
} satisfies Config;
