# oriverk.dev: README

## Author

- [Github](https://github.com/oriverk)
- [Twitter](https://twitter.com/not_you_die)
- [Qiita](https://qiita.com/OriverK)

## Techs

- [Vite](https://vitejs.dev/)
  - Next Generation Frontend Tooling
- ~[Preact](https://preactjs.com/)~
  - ~Fast 3kB alternative to React with the same modern API~
- [React](https://reactjs.org)
  - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/)
  - TypeScript is JavaScript with syntax for types.
- [goober](https://goober.rocks/)
  - A less than 1KB css-in-js solution
- [Cloudflare Pages](https://pages.cloudflare.com/)
  - Cloudflare Pages is a JAMstack platform for frontend developers to collaborate and deploy websites.

## Other references

※基本的には先述の公式サイトを見て理解、サイトを作成した。下記は作成後に見つけたページ等をメモ代わりに記載。

- [Zenn - Next.jsを使う必要がない小規模なSPAの最小構成を考えてみた](https://zenn.dev/a_da_chi/articles/bfcca39eed6a0f)
- [React + Viteで新規プロダクトを開発している話](https://tech.hicustomer.jp/posts/react-vite/)
- [Zenn - Vite で最速 React & TypeScript](https://zenn.dev/sprout2000/articles/98145cf2a807b1)
- [blog.ojisan.io - Preactの環境構築 of 2020](https://blog.ojisan.io/how-to-create-preact-app-2020/)
- [mizchi.dev - 省ビルドサイズ要求環境でモダンフロントエンドをやる (主に preact の話)](https://mizchi.dev/202006261728-minimal-js)

## Env variables

reference: [vitejs: Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html#env-variables-and-modes)

| Name | Description | Reference |
| --- | --- | --- |
| VITE_SITE_PATH | for portfolio site | [GitHub: oriverk/oriverk.dev](https://github.com/oriverk/oriverk.dev) |
| VITE_BLOG_PATH | for portfolio blog | [GitHub: oriverk/blog.oriverk.dev](https://github.com/oriverk/blog.oriverk.dev) |
| VITE_GITHUB_USER_ID | GitHub Account | [GitHub: oriverk](https://github.com/oriverk) |
| VITE_TWITTER_USER_ID | Twitter Account | [Twitter: not_you_die](https://twitter.com/not_you_die) |
| VITE_GITHUB_PERSONAL_ACCESS_TOKEN | /\w+/ | [GitHub: 個人アクセストークンを使用する](https://docs.github.com/ja/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) |

## Errors

### `csstype`

```txt
node_modules/goober/global/global.d.ts(1,45): error TS2307: Cannot find module 'csstype' or its corresponding type declarations.
node_modules/goober/goober.d.ts(1,45): error TS2307: Cannot find module 'csstype' or its corresponding type declarations.
```

devDependency に `csstype` を追加して回避した。あとで詳しく調べる。

## メモ書き

### micromark for markdown parser

about ページ用に内部で保持、処理していた markdown parser が要らなくなったので下を削除した。後で micromark を使う時用にメモ書き

```tsx:markdown.tsx
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
```

```ts:vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  assetsInclude: [/\.mdx?$/]
})
```

### vite-plugin-static-copy

静的ファイルをコピーするプラグイン。不必要になったので削除

```ts:vite.config.ts
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'README.md', dest: "." },
        { src: 'Resume.md', dest: "." }
      ]
    })
  ]
})

```
