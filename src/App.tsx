import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Exercises from "./pages/Exercises";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="workouts" element={<Workouts />} />
        <Route path="exercises" element={<Exercises />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
