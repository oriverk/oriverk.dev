# oriverk.dev: README

## Author

- [Github](https://github.com/oriverk)
- [Twitter](https://twitter.com/not_you_die)
- [Qiita](https://qiita.com/OriverK)

## Techs

- [Vite](https://vitejs.dev/)
  - Next Generation Frontend Tooling
- [Preact](https://preactjs.com/)
  - Fast 3kB alternative to React with the same modern API
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
| VITE_SITE_PATH | for portfolio site | [github: oriverk/oriverk.dev](https://github.com/oriverk/oriverk.dev) |
| VITE_BLOG_PATH | for portfolio blog | [github: oriverk/blog.oriverk.dev](https://github.com/oriverk/blog.oriverk.dev) |

## Errors I met with

```txt
node_modules/goober/global/global.d.ts(1,45): error TS2307: Cannot find module 'csstype' or its corresponding type declarations.
node_modules/goober/goober.d.ts(1,45): error TS2307: Cannot find module 'csstype' or its corresponding type declarations.
```

devDependency に `csstype` を追加して回避した。あとで詳しく調べる。
