import React, { StrictMode } from "react";
import { createRoot, hydrateRoot, Root } from "react-dom/client";
import type { PageContextClient as PCClient } from "vike/types";

export { onRenderClient };

type PageContextClient = PCClient & {
  Page: React.FC;
};

let root: Root | null;
function onRenderClient(pageContext: PageContextClient) {
  const { Page } = pageContext;

  if (!Page)
    throw new Error("Client-side render() hook expects pageContext.Page to be defined");
  const rootContainer = document.getElementById("root");
  if (!rootContainer) throw new Error("DOM element #root not found");
  if (rootContainer.innerHTML === "" || !pageContext.isHydration) {
    if (!root) {
      root = createRoot(rootContainer);
    }
    root.render(
      <StrictMode>
        <Page />
      </StrictMode>
    );
  } else {
    root = hydrateRoot(rootContainer, <Page />);
  }
}
