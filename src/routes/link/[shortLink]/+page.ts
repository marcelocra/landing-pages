import { error, redirect, type LoadEvent } from '@sveltejs/kit';

import { shortlinks } from '../shortlinks';

const shortLinkToFullURL = new Map(shortlinks);

export function load({ params }: LoadEvent) {
	const fullURL = shortLinkToFullURL.get(params.shortLink);
	if (!fullURL) {
		throw error(404, `Not found: '${params.shortLink}'`);
	}

	throw redirect(302, fullURL);
}
