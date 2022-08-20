import { error, redirect, type LoadEvent } from '@sveltejs/kit';

const shortLinkToFullURL = new Map(
	Array.from(
		Object.entries({
			google: 'https://google.com'
		})
	)
);

export function load({ params }: LoadEvent) {
	const fullURL = shortLinkToFullURL.get(params.shortLink);
	if (!fullURL) {
		throw error(404, `Not found: '${params.shortLink}'`);
	}

	throw redirect(302, fullURL);
}
