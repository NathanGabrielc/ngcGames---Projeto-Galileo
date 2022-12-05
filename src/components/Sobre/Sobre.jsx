import React from "react";
import Box from "@mui/material/Box";
import me from "./self.jpg";
import "./SobreElements.jsx";
import {
  Container,
  Descricao,
  Hand,
  ImgContainer,
  Nome,
} from "./SobreElements.jsx";
import Linkedin from "./linkedin.png";
import Github from "./github.png";

const Sobre = () => {
  return (
    <>
      <Container>
        <Box
          display={"flex"}
          flexDirection={{ xs: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            alt={"Minha foto"}
            component={"img"}
            src={me}
            width={{ xs: "35vh", md: "40vh" }}
            height={{ xs: "35vh", md: "40vh" }}
            borderRadius={"50%"}
            p={"1rem"}
          />

          <Box>
            <Nome>
              Olá, Eu sou o
              <span
                style={{
                  color: "#01bf71",
                }}
              >
                {" "}
                Nathan Gabriel
              </span>
              <Hand className="hand">🤚</Hand>
            </Nome>
            <Descricao>
              Sou estudante de desenvolvimento Front-End na Tech4me.
            </Descricao>
            <Descricao>Este projeto é sobre um e-commerce de jogos que desenvolvi com as habilidades e conhecimentos que adquiri durante o curso.</Descricao>
            <Descricao>👴 Idade: 22</Descricao>
            <Descricao>📘 Cursando : Ciência da Computação</Descricao>
            <Descricao>📩 Email: nathangbrc@gmail.com</Descricao>
            <Descricao>Hobbies: 👨‍💻 / ⚽ / 🎮</Descricao>
            <Descricao>Redes Sociais:</Descricao>

            <a href="https://www.linkedin.com/in/nathangabrielc/">
              <ImgContainer src={Linkedin}></ImgContainer>
            </a>

            <a href="https://github.com/NathanGabrielc">
              <ImgContainer src={Github}></ImgContainer>
            </a>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Sobre;
