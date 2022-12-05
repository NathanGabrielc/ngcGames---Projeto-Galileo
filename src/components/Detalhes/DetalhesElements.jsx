import styled from "@emotion/styled";

export const Layout = styled.div`
  background-color: aliceblue;
  display: flex;
  width: 100vw;
  height: 90vh;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: #010606;
`;

export const Container = styled.div`
  border-radius: 40px;
  border: 2px solid #01bf71;
  display: flex;
  width: 60vw;
  height: 60vh;
  position: absolute;
`;
export const Left = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const ImgMain = styled.img`
  width: 70%;
  position: absolute;
`;
export const Right = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  position: relative;
`;

export const Titulo = styled.h1`
  color: #01bf71;
  position: absolute;
  font-size: 3rem;
  display: flex;

  margin-top: 5%;
`;

export const Descricao = styled.p`
  padding: 30px;
  color: #fff;
  font-size: 1.2rem;
  position: absolute;
  display: flex;
  margin-top: 20%;
`;
export const Preco = styled.p`
  color: #fff;
  padding: 30px;

  position: absolute;
  display: flex;
  margin-top: 38%;
`;

export const Categoria = styled.p`
  color: #fff;
  padding: 30px;

  position: absolute;
  display: flex;
  margin-top: 45%;
`;

export const Valores = styled.h4`
  color: #01bf71;
  padding: 0 10px;
  display: flex;
`;

export const Button = styled.button`
  width: 50%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60%;
  border-radius: 50px;
  padding: 12px 30px;
  cursor: pointer;
  color: #000;
  &:hover {
    transition: all 0.4s ease-in-out;
    background-color: #01bf71;
    color: #000;
  }
`;
