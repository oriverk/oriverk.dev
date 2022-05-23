import React from "react";
import { Helmet } from "react-helmet-async";

interface Props {
  pathname: string;
  title?: string;
  description?: string;
  ogImage?: string;
  noindex?: boolean;
}

export const Seo: React.FC<Props> = (props) => {
  const { pathname, title = "", description = "", ogImage = "", noindex = false } = props;

  const origin = import.meta.env.VITE_SITE_PATH;
  const pageUrl = origin + pathname;
  const ogImageUrl = origin + ogImage;
  const defaultTitle = "Kawano Yudai";
  const metaTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={description || metaTitle} />
      <meta name="og:url" content={pageUrl} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={description || metaTitle} />
      <meta name="og:image" content={ogImageUrl} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "all"} />
      <link rel="canonical" href={pageUrl} />
    </Helmet>
  );
};
