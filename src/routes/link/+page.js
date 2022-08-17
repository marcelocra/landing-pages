import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	throw redirect(302, 'https://github.com/marcelocra');
}
