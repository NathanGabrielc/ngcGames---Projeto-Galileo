import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import {
  Container,
  ImgMain,
  Layout,
  Left,
  Preco,
  Right,
  Titulo,
  Descricao,
  Categoria,
  Valores,
  Button,
} from "./DetalhesElements";

const Detalhes = () => {
  const { id } = useParams();
  const [produto, setProduto] = React.useState({});
  const url = "https://63069afec0d0f2b8011f9944.mockapi.io/produtos/" + id;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProduto(res);
      });
  }, [url]);

  return (
    <>
      <Navbar />
      <Layout>
        <Container>
          <Left>
            <ImgMain src={produto.imagem}></ImgMain>
          </Left>
          <Right>
            <Titulo> {produto.nome}</Titulo>

            <Descricao>
              <Valores>Descrição: </Valores> {produto.descricao}
            </Descricao>
            <Preco>
              <Valores>Preço: </Valores> {produto.preco}
            </Preco>
            <Categoria>
              <Valores>Categoria: </Valores> {produto.categoria}
            </Categoria>
            <Button>Comprar</Button>
          </Right>
        </Container>
      </Layout>
    </>
  );
};

export default Detalhes;
