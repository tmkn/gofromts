import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

const OG_IMAGE_URL = "https://gofromts.tmkn.dev/og.png";

export const onRequest = defineRouteMiddleware(context => {
    const { entry, head } = context.locals.starlightRoute;

    head.push(
        // OG image
        {
            tag: "meta",
            attrs: {
                property: "og:image",
                content: OG_IMAGE_URL
            }
        },
        {
            tag: "meta",
            attrs: {
                property: "og:image:width",
                content: "1200"
            }
        },
        {
            tag: "meta",
            attrs: {
                property: "og:image:height",
                content: "630"
            }
        },
        // OG image x.com
        {
            tag: "meta",
            attrs: {
                name: "twitter:image",
                content: OG_IMAGE_URL
            }
        },
        {
            tag: "meta",
            attrs: {
                name: "twitter:title",
                content: entry.data.title
            }
        },
        {
            tag: "meta",
            attrs: {
                name: "twitter:description",
                // todo: figure out how to use description from astro.config.mjs as fallback
                content: entry.data.description ?? "Use your TypeScript knowledge to learn Go"
            }
        },
        {
            tag: "meta",
            attrs: {
                name: "twitter:url",
                content: new URL(context.url.pathname, context.site).href
            }
        }
    );
});
