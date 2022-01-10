import { h, FunctionalComponent } from "preact";
// @ts-ignore
import Helmet from "preact-helmet";

interface SeoProps {
  path: string;
  title?: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
}

export const Seo: FunctionalComponent<SeoProps> = (props) => {
  const { path, title = "", description, ogImagePath = "/assets/sugarloaf-adelaide.png", noindex } = props;

  const sitePath = import.meta.env.VITE_SITE_PATH;
  const pageUrl = sitePath + path;
  const ogImageUrl = sitePath + ogImagePath;
  const defaultTitle = "Kawano Yudai";

  return (
    <Helmet
      title={title}
      titleTemplate="%s | Kawano Yudai"
      defaultTitle={defaultTitle}
      meta={[
        { name: "og:url", content: pageUrl },
        { name: "og:title", content: `${title} | Kawano Yudai` },
        { name: "description", content: description },
        { name: "og:image", content: ogImageUrl },
        { name: "og:description", content: description },
        { name: "robots", content: noindex ? "noindex,nofollow" : "all" },
      ]}
      link={[{ rel: "canonical", href: pageUrl }]}
    />
  );
};
