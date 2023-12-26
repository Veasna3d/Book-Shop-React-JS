import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import BestBooks from "./components/BestBooks/BestBooks";

const App = () => {
  return (
    <>
      <div className="bg-white dakr:bg-gray-900 dark:text-white duration-200">
        <Navbar />
        <Hero />
        <BestBooks />
      </div>
    </>
  );
};

export default App;
