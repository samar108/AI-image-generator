import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { logo } from "./assets";

import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 py-4 border-b border-b-[#e6ebf4]">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-28 object-contain" />
          </Link>
          <Link
            to="/create-post"
            className="font-inter font-medium bg-[#6469ff] text-white
          px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
