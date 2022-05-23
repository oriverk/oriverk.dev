/// <reference types="vite/client" />

interface ImportMetaEnv {
  // readonly VITE_APP_TITLE: string
  // その他の環境変数...
  readonly VITE_SITE_PATH: string;
  readonly VITE_BLOG_PATH: string;
  readonly VITE_GITHUB_USER_ID: string;
  readonly VITE_TWITTER_USER_ID: string;
  readonly VITE_GITHUB_PATH: string;
  readonly VITE_GITHUB_PERSONAL_ACCESS_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
