import { Handlers, PageProps } from "$fresh/server.ts";

interface Site {
  hasRedirect: boolean;
}

const shortLinks = new Map<string, string>([
  ["gcm", "https://marcelocra.dev/blog/git-multiplos-usuarios"],
]);

export const handler: Handlers<Site> = {
  GET(_, ctx) {
    const { link } = ctx.params;
    const redirectUrl = shortLinks.get(link);

    console.debug({ link, redirectUrl });

    if (!redirectUrl) {
      return ctx.render({ hasRedirect: false });
    }

    return Response.redirect(redirectUrl, 307);
  },
};

export default function Page({ data: { hasRedirect } }: PageProps<Site>) {
  if (!hasRedirect) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      Just a sec...
    </div>
  );
}
