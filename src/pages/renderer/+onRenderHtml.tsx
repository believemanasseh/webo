import {dangerouslySkipEscape, escapeInject} from 'vike/server';
import type {PageContextServer} from 'vike/types';

export {onRenderHtml};

function onRenderHtml(pageContext: PageContextServer) {
	if (pageContext.Page)
		throw new Error("Server-side render() hook doesn't expect pageContext.Page to be defined");
	const pageHtml = '';
	return escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/src/index.css">
      </head>
      <body>
          <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
