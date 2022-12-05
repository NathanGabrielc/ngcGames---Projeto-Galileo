import React, { useState } from "react";

import Video from "../../videos/video.mp4";

import CountdownTimer from "./CountdownTimer/CountdownTimer";

import {
  GameContainer,
  GameBg,
  VideoBg,
  GameContent,
  GameH1,
  GameP,
  GameBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
} from "./GameElements";

const GameSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <GameContainer>
        <GameBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4/" />
        </GameBg>
        <GameContent>
          <GameH1>NGC Games</GameH1>
          <GameP>
            Selecionamos para você as melhores ofertas da NGC Games! Temos o
            melhor preço do Brasil. Temos ofertas para os consoles Nintendo
            Switch, PS5, PS4, PS3, XBOX Series X, XBOX One, XBOX 360 e para
            jogos de Desktop!
          </GameP>
          <br />
          <CountdownTimer />
          <GameBtnWrapper>
            <Button to={"/produtos"}>
              Get started{hover ? <ArrowRight /> : <ArrowForward />}
            </Button>
          </GameBtnWrapper>
        </GameContent>
      </GameContainer>
    </>
  );
};

export default GameSection;
