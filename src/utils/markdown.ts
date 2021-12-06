import { micromark } from "micromark"
import { frontmatter } from "micromark-extension-frontmatter"
import { gfm, gfmHtml } from 'micromark-extension-gfm'

export function parseMarkdwon(markdownContent: string) {
  const html = micromark(markdownContent, {
    allowDangerousHtml: true,
    extensions: [frontmatter(),gfm()],
    htmlExtensions: [gfmHtml()]
  })
  
  return { html }
}