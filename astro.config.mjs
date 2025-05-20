// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

const OG_IMAGE_URL = "https://gofromts.tmkn.dev/og.png";

// https://astro.build/config
export default defineConfig({
    site: "https://gofromts.tmkn.dev",
    integrations: [
        starlight({
            title: "Go from TS",
            // fallback when description is not set via frontmatter
            description: "Use your TypeScript knowledge to learn Go",
            social: [
                { icon: "github", label: "GitHub", href: "https://github.com/tmkn/gofromts" },
                { icon: "x.com", label: "@tmkn", href: "https://x.com/tmkndev" }
            ],
            sidebar: [
                {
                    label: "Start",
                    items: ["start/why", { slug: "start/targetgroup" }, { slug: "start/usage" }]
                },
                {
                    label: "Basics",
                    items: [
                        { slug: "basic/comments" },
                        { slug: "basic/variables" },
                        { slug: "basic/if" },
                        { slug: "basic/for" },
                        { slug: "basic/while" },
                        { slug: "basic/switch" }
                    ]
                },
                {
                    label: "Data Types",
                    items: [
                        { slug: "types/overview" },
                        { slug: "types/null_undefined" },
                        { slug: "types/any" },
                        { slug: "types/boolean" },
                        { slug: "types/number" },
                        { slug: "types/string" },
                        { slug: "types/array" },
                        { slug: "types/object" },
                        { slug: "types/map" },
                        { slug: "types/set" },
                        { slug: "types/class" },
                        { slug: "types/interfaces" }
                    ]
                },
                {
                    label: "Functions",
                    items: [
                        { slug: "function/functions" },
                        { slug: "function/arguments" },
                        { slug: "function/returns" }
                    ]
                }
            ],
            editLink: {
                baseUrl: "https://github.com/tmkn/gofromts/edit/master/"
            },
            head: [
                {
                    tag: "script",
                    attrs: {
                        src: "/js/script.js",
                        "data-domain": "gofromts.tmkn.dev",
                        defer: true
                    }
                },
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
                        property: "twitter:image",
                        content: OG_IMAGE_URL
                    }
                }
            ]
        })
    ]
});
