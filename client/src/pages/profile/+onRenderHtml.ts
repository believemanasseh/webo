import React from "react";
import ReactDOMServer from "react-dom/server";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import type { PageContextServer as PCServer } from "vike/types";

export { onRenderHtml };

type PageContextServer = PCServer & {
  Page?: React.JSX.Element;
};

function onRenderHtml(pageContext: PageContextServer) {
  let pageHtml;
  if (pageContext.Page) {
    console.log("her1");
    const { Page } = pageContext;
    console.log(Page, "url");
    pageHtml = ReactDOMServer.renderToString(Page);
    console.log(pageHtml, "pageHtml");
  } else {
    console.log("her2");
    pageHtml = "";
  }

  return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/webo.png">
      </head>
      <body>
          <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
