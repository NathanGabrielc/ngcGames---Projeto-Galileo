import React from "react";
import "./SiginUp.css";
import Imagem2 from "./SignIn.png";
import Navbar from "../Navbar/Navbar";

const SignIn = () => {
  return (
    <>
      <Navbar />
      <div className="box">
        <div className="form-box">
          <div className="logo">
            <h2>NGC Games</h2>
          </div>
          <form action="#" autocomplete="off">
            <div className="input-group um">
              <label for="user">Nome:</label>
              <input
                type="text"
                id="username"
                placeholder="Digite o seu nome"
                required
              />
            </div>
            <div className="input-group um">
              <label for="user">Sobrenome:</label>
              <input
                type="text"
                id="username"
                placeholder="Digite o seu sobrenome"
                required
              />
            </div>
            <div className="input-group um">
              <label for="user">Usuário:</label>
              <input
                type="text"
                id="username"
                placeholder="Digite o seu Usuário"
                required
              />
            </div>

            <div className="input-group dois">
              <label for="senha">Senha:</label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                required
              />
            </div>
            <div className="input-group dois">
              <label for="senha">Confirme sua Senha:</label>
              <input
                type="password"
                id="password"
                placeholder="Confirme sua Senha"
                required
              />
            </div>

            <div className="input-group tres">
              <button>Login</button>
            </div>
          </form>
        </div>
        <div className="img-box">
          <img src={Imagem2} alt="ImageWork" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
