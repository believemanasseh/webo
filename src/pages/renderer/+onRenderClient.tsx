import {StrictMode} from 'react';
import {createRoot, hydrateRoot, Root} from 'react-dom/client';
import type {OnRenderClientAsync, PageContextClient} from 'vike/types';

export {onRenderClient};

let root: Root | null;
async function onRenderClient(
	pageContext: PageContextClient
): ReturnType<OnRenderClientAsync> {
	const {Page} = pageContext;
	console.log(Page, 'page');

	if (!Page)
		throw new Error('Client-side render() hook expects pageContext.Page to be defined');
	const rootContainer = document.getElementById('root');
	if (!rootContainer) throw new Error('DOM element #root not found');
	if (rootContainer.innerHTML === '' || !pageContext.isHydration) {
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
