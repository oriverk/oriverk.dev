import { micromark } from "micromark";
import { frontmatter } from "micromark-extension-frontmatter";
import { gfm, gfmHtml } from "micromark-extension-gfm";

export function parseMarkdwon(markdown: string) {
  const html = micromark(markdown, {
    allowDangerousHtml: true,
    extensions: [frontmatter(), gfm()],
    htmlExtensions: [gfmHtml()],
  });

  return { html };
}
