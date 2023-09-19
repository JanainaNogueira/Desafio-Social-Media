import Form from '../../components/form'
import Style from './index.module.css'

function Login(){
    return(
        <div className={Style.container}>
            <main className={Style.main}>
                <div className={Style.main__text}>
                    <h1>Olá,</h1>
                    <p>Para continuar navegando de forma segura, efetue o login</p>
                </div>
                <Form/>
                <a href='#'>Novo por aqui?<strong>Registre-se</strong></a>
            </main>
            <aside className={Style.side_image}>
            </aside>
        </div>
    )
}

export default Login