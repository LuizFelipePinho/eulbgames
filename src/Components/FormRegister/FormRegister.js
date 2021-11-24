import './Register.css'

const FormRegister = () => {
    return(
        <>
        <div className="containerFormCreate">

            <div className="boxFormCreate">
                <h3 className="titleCreate">CADASTRE-SE</h3>

                <form className="FormCreate">
                     <label className="nameCreate" for="nameCreate">Nome:</label>
                     <input className="inpNameCrete" type="text" id="nameCreate"></input>     

                    <label className="emailCreate" for="emailCreate">Email: </label>
                    <input className="inpCreateEmail" type="text"></input>           

                    <label className="passCreate" for="passCreate">Senha</label>
                    <input className="inpCreatePass" type="text" id="passCreate"></input>

                    <button className="btnCriarConta" type="submit"> <span>Criar conta</span></button>
                         
                </form>

            </div>
        </div>
       
        
        </>

    )
}

export default FormRegister