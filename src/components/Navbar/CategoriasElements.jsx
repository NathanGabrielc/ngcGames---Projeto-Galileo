import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import {
  RiSwitchFill,
  RiXboxLine,
  RiXboxFill,
  RiMouseLine,
  RiListCheck,
} from "react-icons/ri";
import {
  SiPlaystation5,
  SiPlaystation4,
  SiPlaystation3,
  SiPlaystation2,
} from "react-icons/si";

export const Computador = styled(RiMouseLine)`
  color: #fff;
  font-size: 40px;
`;
export const List = styled(RiListCheck)`
  color: #fff;
  font-size: 40px;
`;

export const XboxOne = styled(RiXboxFill)`
  color: #fff;
  font-size: 40px;
`;

export const Xbox360 = styled(RiXboxLine)`
  color: #fff;
  font-size: 40px;
`;

export const Playstation5 = styled(SiPlaystation5)`
  color: #fff;
  font-size: 40px;
`;
export const Playstation4 = styled(SiPlaystation4)`
  color: #fff;
  font-size: 40px;
`;
export const Playstation3 = styled(SiPlaystation3)`
  color: #fff;
  font-size: 40px;
`;
export const Playstation2 = styled(SiPlaystation2)`
  color: #fff;
  font-size: 40px;
`;
export const Switch = styled(RiSwitchFill)`
  color: #fff;
  font-size: 40px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  background-color: #000;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  top: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  cursor: pointer;
`;

export const NavLinks = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    color: #01bf71;
  }
`;
/* saasdadasd */

export const ContainerCard = styled.div`
  display: grid;
  position: absolute;
  background-color: #010606;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5em;
  grid-row-gap: 5rem;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    display: grid;
    position: absolute;
    background-color: #010606;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1rem;
  }
`;
export const Card = styled.div`
  /* cada card */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  border-radius: 10px;
  height: 50%;

  //margin: 20px;
  padding: 30px;
  border: 2px solid #01bf71;
  overflow: hidden;

  transition: 0.5s;
  height: 100%;

  :hover {
    position: relative;
    background-color: transparent;
    color: white;
    margin-top: -30px;
    box-shadow: 2px 20px 25px #01bf71;
    border-color: #01bf71;
  }
`;
export const ContainerImg = styled.div`
  width: 45%;
  height: 45%;
`;

export const ImgCard = styled.img`
  transition: 0.5s;
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const TituloCard = styled.h1`
  font-size: 1.1rem;
  position: relative;
  color: #01bf71;
  padding: 5px;
`;

export const Loja = styled.h4`
  color: #fff;
`;

export const Descricao = styled.p`
  /* texto */
  padding: 10px;
  font-size: 15px;
  position: relative;
  color: #fff;
  transition: 0.5s;

  :hover {
    color: white;
  }
`;
export const Comprar = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50px;
  background-color: #fff;
  white-space: nowrap;
  padding: 10px 22px 10px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
    color: #010606;
  }
`;
