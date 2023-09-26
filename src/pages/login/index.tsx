import { Link } from 'react-router-dom'
import users from '../../data/users'
import Form from '../../components/form'
import Style from './index.module.css'

function Login(){
        console.log(users[0].nome)
    return(
        <div className={Style.container}>
            <main className={Style.main}>
                <div className={Style.main__text}>
                    <h1>Olá,</h1>
                    <p>Para continuar navegando de forma segura, efetue o login</p>
                </div>
                <Form name='Login'/>
                <Link className={Style.navigation} to="register">Novo por aqui?<strong>Registre-se</strong></Link>
            </main>
            <aside className={Style.side_image}>
            </aside>
        </div>
    )
}

export default Login