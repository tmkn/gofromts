// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Go from TS",
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
                }
            ]
        })
    ]
});
