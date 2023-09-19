import Style from './index.module.css'
import Input from '../../components/input'
import User from '../../assets/img/user.svg'
import Lock from  '../../assets/img/lock.svg'
import Button from '../../components/button'

function Formulario(){
    return(
        <form className={Style.form_login}>
            <h2>Login</h2>
            <Input type="text" placeholder="Usuário" 
                icon={User}
            />
            <Input type="password" placeholder="Senha" 
                icon={Lock}
            />
            <Button text="Entrar"/>
        </form>
    )
}
export default Formulario