import { Link } from 'react-router-dom'
import Form from '../../components/form'
import Style from './index.module.css'

function Register(){
    return(
        <div className={Style.container}>
            <main className={Style.main}>
                <div className={Style.main__text}>
                    <h1>Olá,</h1>
                    <p>Por favor, registre-se para continuar</p>
                </div>
                <Form name='Cadastro'/>
                <Link className={Style.navigation} to="/">Novo por aqui?<strong>Registre-se</strong></Link>
            </main>
            <aside className={Style.side_image}>
            </aside>
        </div>
    )
}

export default Register