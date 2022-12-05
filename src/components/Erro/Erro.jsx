import React from "react";
import Navbar from "../Navbar/Navbar";
import Slide1 from "./404.png";
import {
  Container,
  DivImagem,
  DivTitulo,
  Imagem,
  Titulo,
} from "./ErroElements";

const Erro = () => {
  return (
    <>
      <Navbar />
      <Container>
        <DivTitulo>
          <Titulo>Esta Pagina não foi encontrada</Titulo>
        </DivTitulo>
        <DivImagem>
          <Imagem src={Slide1} alt="" />
        </DivImagem>
      </Container>
    </>
  );
};

export default Erro;
