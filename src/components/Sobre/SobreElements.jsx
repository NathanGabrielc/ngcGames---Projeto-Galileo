import styled from "@emotion/styled";
export const Nome = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 20px;
  @media only screen and (min-width: 940px) {
    font-size: 3rem;
    text-align: left;
  }
`;
export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #010606;
  color: #fff;
`;
export const Descricao = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  padding: 15px;
  @media only screen and (min-width: 940px) {
    font-size: 2rem;
    text-align: left;
  }
`;

export const Hand = styled.span`
  animation-name: wave;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const ImgContainer = styled.img`
  width: 70px;
  margin: 10px;
`;
