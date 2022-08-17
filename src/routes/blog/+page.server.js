// @ts-ignore
export async function load({ params }) {
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292699)");
	return {
		status: 200,
		headers: {},
		body: { value: 'value' }
	};
}
