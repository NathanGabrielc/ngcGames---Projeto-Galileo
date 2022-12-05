import React from "react";

import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavMenu,
  Switch,
  Playstation5,
  Playstation4,
  Playstation3,
  Playstation2,
  Xbox360,
  XboxOne,
  Computador,
  ContainerCard,
  Card,
  TituloCard,
  ImgCard,
  Descricao,
  Comprar,
  ContainerImg,
  Loja,
  List,
} from "./CategoriasElements";

const Categorias = () => {
  const [produtos, setProdutos] = React.useState([]);
  const [categorias, setCategorias] = React.useState([]);

  const url =
    "https://63069afec0d0f2b8011f9944.mockapi.io/produtos?loja=NGC Games";
  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, [url]);

  React.useEffect(
    () => {
      setCategorias([...produtos]);
    },
    [produtos],
   
  );

  const handleCat = (tipo) => {
    let itensTres = 0;
    if (tipo === 0) itensTres = produtos.slice(0, 8);
    else if (tipo === 1) itensTres = produtos.slice(0, 1);
    else if (tipo === 2) itensTres = produtos.slice(1, 2);
    else if (tipo === 3) itensTres = produtos.slice(2, 3);
    else if (tipo === 4) itensTres = produtos.slice(3, 4);
    else if (tipo === 5) itensTres = produtos.slice(4, 5);
    else if (tipo === 6) itensTres = produtos.slice(5, 6);
    else if (tipo === 7) itensTres = produtos.slice(6, 7);
    else if (tipo === 8) itensTres = produtos.slice(7, 8);

    setCategorias([...itensTres]);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavMenu>
            <NavItem>
              <List />
              <NavLinks onClick={() => handleCat(0)}>All</NavLinks>
            </NavItem>
            <NavItem>
              <Switch />
              <NavLinks onClick={() => handleCat(1)}>Switch</NavLinks>
            </NavItem>
            <NavItem>
              <Playstation5 />
              <NavLinks onClick={() => handleCat(2)}>Playstation5</NavLinks>
            </NavItem>
            <NavItem>
              <Playstation4 />
              <NavLinks onClick={() => handleCat(3)}>Playstation4</NavLinks>
            </NavItem>
            <NavItem>
              <Playstation3 />
              <NavLinks onClick={() => handleCat(4)}>Playstation3</NavLinks>
            </NavItem>
            <NavItem>
              <Playstation2 />
              <NavLinks onClick={() => handleCat(5)}>Playstation2</NavLinks>
            </NavItem>
            <NavItem>
              <Xbox360 />
              <NavLinks onClick={() => handleCat(6)}>xBox360</NavLinks>
            </NavItem>
            <NavItem>
              <XboxOne />
              <NavLinks onClick={() => handleCat(7)}>xBoxOne</NavLinks>
            </NavItem>
            <NavItem>
              <Computador />
              <NavLinks onClick={() => handleCat(8)}>Computador</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>

      <ContainerCard>
        {categorias.map((item) => (
          <Card key={`cat_${item.id}`}>
            <TituloCard>{item.nome}</TituloCard>
            <ContainerImg>
              <ImgCard src={item.imagem} alt="" />
            </ContainerImg>

            <Loja>@{item.loja}</Loja>

            <Descricao>{item.descricao}</Descricao>

            <Descricao>Preço:{item.preco}</Descricao>

            <Comprar to={`/detalhes/${item.id}`}>Detalhes</Comprar>
          </Card>
        ))}
      </ContainerCard>
    </>
  );
};

export default Categorias;
