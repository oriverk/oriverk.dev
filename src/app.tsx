import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Layout } from "./components/layouts";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { PageNotFound } from "./pages/404";

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
