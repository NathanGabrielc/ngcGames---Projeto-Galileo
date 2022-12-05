import React from "react";

import NavBar from "../components/Navbar/Navbar";
import Categorias from "../components/Navbar/Categorias";
import { Linha } from "../components/Navbar/NavbarElements";
const Vitrine = () => {
  return (
    <>
      <div>
        <NavBar />
        <Linha />
        <Categorias />
      </div>
    </>
  );
};

export default Vitrine;
