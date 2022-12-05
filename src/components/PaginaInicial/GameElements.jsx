import styled from "@emotion/styled";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  border-radius: 50px;
  background-color: #eee;
  color: #000;
  padding: 12px 30px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-in-out;

  &:hover {
    transition: all 0.4s ease-in-out;
    background-color: #01bf71;
    color: #000;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0px;
  height: 100vh;
  position: relative;
`;

export const GameBg = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const GameContent = styled.div`
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const GameH1 = styled.h1`
  color: #01bf71;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 488px) {
    font-size: 32px;
  }
`;

export const GameP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  background-color: transparent;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 488px) {
    font-size: 18px;
  }
`;

export const GameBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
