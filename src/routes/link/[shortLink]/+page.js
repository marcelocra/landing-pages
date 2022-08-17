import { error, redirect } from '@sveltejs/kit';

const shortLinkToFullURL = new Map(
	Array.from(
		Object.entries({
			google: 'https://google.com'
		})
	)
);

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	const fullURL = shortLinkToFullURL.get(params.shortLink);
	if (!fullURL) {
		throw error(404, `Not found: '${params.shortLink}'`);
	}

	throw redirect(302, fullURL);
}
