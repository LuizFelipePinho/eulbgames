import './Login.css'
import BoxSignUp from './boxsignup.png'
import { Link } from 'react-router-dom'

const LoginElem = () => {
    return (
        <div className="containerLogin">
            <div className="screenLogin">

                <form className="boxForm">
                    <h4 className="Titlelogin">Login</h4>
                    <label className="loginName" for="name">
                        Nome:
                    </label>
                    <input className="loginInputName" type="text" name="name" />

                    <label className="loginPassword" for="password">
                        Senha:
                    </label>
                    <input className="loginInputPassword" type="text" name="password" />

                    
                    <button className="btnLogin" type="submit">
                       <span>Iniciar Sessão</span>
                    </button>

                </form>

            </div>

            <div className="screenSignUp">

                <div className="infosSignUp">
                    <p className="signUpMsg">Cadastre-se no Steam e descubra milhares de jogos para jogar. </p>
                    <img className="imgSignUp" src={BoxSignUp} alt=""></img>
                    
                    <Link to="/"><button className="btnCadastrar"> Cadastrar-se</button> </Link>
                </div>    
            </div>

        </div>
    )
}

export default LoginElem