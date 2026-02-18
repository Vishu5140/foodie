import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Welcome from "./Components/Welcome";
import Menu from "./Components/Menu";
import Veg from "./Components/Veg";
import NonVeg from "./Components/NonVeg";
import Content from "./Components/Content";
import NavbarLayout from "./Layouts/NavbarLayout";
import Cartlist from "./Components/Cartlist";
import About from "./Components/About";
import Overview from "./Components/Overview";
import Favourite from "./Components/Favourite";
import Profile from "./Components/Profile";
import NonContent from "./Components/NonContent";
import Contact from "./Components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home without navbar */}
        <Route path="/" element={<Home />} />
         <Route path="/menu/veg/:id" element={<Content />} />
          <Route path="/menu/nonveg/:id" element={<NonContent />} />
         <Route path="/cartlist" element={<Cartlist/>}/>
         <Route path="/overview" element={<Overview/>}/>
         <Route path="/favourite" element={<Favourite/>}/>
        {/* Routes with navbar */}
        <Route element={<NavbarLayout />}>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          {/* Menu with nested routes */}
          <Route path="/menu" element={<Menu />}>
            <Route index element={<Veg />} replace/>
            <Route path="veg" element={<Veg />} />
            <Route path="nonveg" element={<NonVeg />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
