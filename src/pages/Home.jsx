import React, { lazy, Suspense } from "react";
import Header from "../components/Header";

const Product = lazy(() => import("../components/Product"));

const Home = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>Loading Products...</h2>}>
        <Product />
      </Suspense>
    </>
  );
};

export default Home;