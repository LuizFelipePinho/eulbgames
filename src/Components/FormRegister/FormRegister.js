import "./Register.css";
import { useState } from "react";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfir, setPasswordConfir] = useState("");


  const pegaDados = (event) => {
    event.preventDefault();
    const formData = {
        name: name,
        email: email,
        nickname: nickName,
        password: password,
        passwordConfirmation: passwordConfir
    }
    console.log(formData);

};


  return (
    <>
      <div className="containerFormCreate">
        <div className="boxFormCreate">
          <h3 className="titleCreate">CADASTRE-SE</h3>

          <form className="FormCreate" onSubmit={pegaDados}>
            <label className="nameCreate" for="nameCreate">
              Nome:
            </label>
            <input
              className="inpNameCrete"
              type="text"
              id="nameCreate"
              onChange={event => setName(event.target.value)}
              required
            ></input>

            <label className="emailCreate" for="emailCreate">
              Email:{" "}
            </label>
            <input
              className="inpCreateEmail"
              type="text"
              id="emailCreate"
              onChange={event => setEmail(event.target.value)}
              required
            ></input>

            <label className="nickNameCreate" for="nickNameCreate">
              Apelido:{" "}
            </label>
            <input
              className="inpCreateNickName"
              type="text"
              id="nickNameCreate"
              onChange={event => setNickName(event.target.value)}
              required
            ></input>

            <label className="passCreate" for="passCreate">
              Senha
            </label>
            <input
              className="inpCreatePass"
              type="text"
              id="passCreate"
              onChange={event => setPassword(event.target.value)}
              required
            ></input>

            <label className="passCreate" for="passCreate">
              Confirmação de Senha
            </label>
            <input
              className="inpCreatePass"
              type="text"
              id="passCreate"
              onChange={event => setPasswordConfir(event.target.value)}
              required
            ></input>

            <button className="btnCriarConta" type="submit">
              {" "}
              <span>Criar conta</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
