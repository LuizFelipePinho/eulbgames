import './Login.css'
import BoxSignUp from './boxsignup.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState} from 'react'
import axios from 'axios';


const LoginElem = () => {
    
    const [name, setName ] = useState('')
    const [password, setPassword ] = useState('')
    const navigate = useNavigate()

    const pegaDados = (event) => {
        event.preventDefault()
        const dataUser = {
            email: name,
            password: password
        }

        LogaUser(dataUser)
        navigate('/')

    }

    
    const capturaDado = (event) => {
      
        event.target.name === 'name' ? setName(event.target.value) : setPassword(event.target.value)  

    }

    const LogaUser = (data) => {
        axios.post('https://nintendo-shop.herokuapp.com/auth/login', data)
        .then((res) => {
            alert('Usuário ' + res.data.user.name + ' logado com sucesso!')
            const token = res.data.token;
            localStorage.setItem('token', token)
        })
        .catch( (err) => alert('Erro ao logar'))
    }

    return (
        <div className="containerLogin">
            <div className="screenLogin">

                <form className="boxForm" onSubmit={pegaDados}>
                    <h4 className="Titlelogin">Login</h4>
                    <label className="loginName" for="name">
                        Email:
                    </label>
                    <input className="loginInputName" type="text" name="name" onChange={capturaDado}/>

                    <label className="loginPassword" for="password">
                        Senha:
                    </label>
                    <input className="loginInputPassword" type="text" name="password" onChange={capturaDado}/>

                    
                    <button className="btnLogin" type="submit">
                       <span>Iniciar Sessão</span>
                    </button>

                </form>

            </div>

            <div className="screenSignUp">

                <div className="infosSignUp">
                    <p className="signUpMsg">Cadastre-se no Steam e descubra milhares de jogos para jogar. </p>
                    <img className="imgSignUp" src={BoxSignUp} alt=""></img>
                    
                    <Link to="/register"><button className="btnCadastrar"> Cadastrar-se</button> </Link>
                </div>    
            </div>

        </div>
    )
}

export default LoginElem