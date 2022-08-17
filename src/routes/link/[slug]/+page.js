import { error, redirect } from '@sveltejs/kit';

const shortLinkToFullURL = new Map(
	Array.from(
		Object.entries({
			test: 'https://google.com'
		})
	)
);

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	console.log({ params });
	const fullURL = shortLinkToFullURL.get(params.slug);
	if (!fullURL) {
		throw error(404, 'Not found');
	}

	throw redirect(302, fullURL);
}
