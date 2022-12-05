import React from "react";
import "./SignIn.css";
import Imagem1 from "./Login.png";
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
              <label for="user">Usuário:</label>
              <i data-feather="user" id="user"></i>
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
            <div className="input-group tres">
              <button>Login</button>
            </div>
          </form>
        </div>
        <div className="img-box">
          <img src={Imagem1} alt="ImageWork" />
        </div>
      </div>
    </>
  );
};

export default SignIn;
