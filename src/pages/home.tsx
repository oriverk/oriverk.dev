import React from "react";

import { Seo } from "../components/Seo";
import { Hero } from "../components/Hero"

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = () => (
  <>
    <Seo pathname="/" title="Top" description="Kawano Yudai`s website" />
    <Hero />
  </>
);