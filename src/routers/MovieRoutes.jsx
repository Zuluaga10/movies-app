import React from "react";
import { Route, Routes } from "react-router-dom";

import { SubscribePage } from "../components/movie/SubscribePage";
import { MoviesApp } from "../MoviesApp";

export const MovieRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/movies" element={<MoviesApp />} />
        <Route path="/subscribe" element={<SubscribePage />} />
        <Route path="/" element={<MoviesApp />} />
      </Routes>
    </>
  )
}
