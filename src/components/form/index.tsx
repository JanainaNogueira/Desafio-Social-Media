import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {login} from '../../redux/users/usersReducer'
import { useNavigation,withRouter, RouteComponentProps } from 'react-router-dom'
import {useState} from 'react'
import users from '../../data/users'

import Style from './index.module.css'
import Input from '../../components/input'
import iconUser from '../../assets/img/user.svg'
import iconLock from  '../../assets/img/lock.svg'
import iconFingerprint from '../../assets/img/fingerprint.svg'
import iconCalendar from '../../assets/img/calendar.svg'
import iconAt from '../../assets/img/at.svg'
import iconConfirm from '../../assets/img/confirm.svg'
import Button from '../../components/button'

interface propsForm{
    name:string
}
interface ButtonPropsNavigation extends RouteComponentProps<any> {}

const Formulario:React.FC<propsForm>=(props)=>{
    const [userName,setUserName]=useState('')
    const [password, setPassword]=useState('')
    const [realName,setRealName]=useState('')
    const [nascimento, setNascimento]=useState('')
    const [email,setEmail]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('')
    const [errorLogin,setErrorLogin]=useState(false)
    const [errorRegisterUser,setErrorRegisterUser]=useState(false)
    const [errorRegisterPassword,setErrorRegisterPassword]=useState(false)

    const loginValue = useAppSelector(state=>state.users)
    const dispatch = useAppDispatch()
    //verifica os dados de login
    function userLogin(event){
        event.preventDefault()
        const inputs = document.querySelectorAll('Input')
            if(users.some((user)=>user.usuario===userName && user.password === password)){
                //setar erro
                setErrorLogin(false)
                dispatch(login({userName,password}))
            }else{
                //altera classe se tiver erro
                setErrorLogin(true)
            }
    }
    //verificar inputs
    function verifInputs(event){
        event.preventDefault()
        const inputs = document.querySelectorAll('input')
        inputs.forEach((input)=>{
            switch(input.name){
                case "PASSWORD":
                    if(password!=confirmPassword || password== ""){
                        setErrorRegisterPassword(true)
                    }else{
                        setErrorRegisterPassword(false)
                    }
                break;
                case "USERNAME":
                    if(users.some((user)=>user.usuario === userName)){
                        setErrorRegisterUser(true)
                    }else{
                        setErrorRegisterUser(false)
                    }
                break;
                default:
                    if(errorRegisterPassword!=true && errorRegisterUser!= true){
                        dispatch(login({userName,password,realName,nascimento,email}))
                    }
                break;
            }
        })
    }

    return(
        <form className={props.name=="Login"?Style.form_login:Style.form_register}>
            <h2>{props.name}</h2>
            <Input name="NOME" type="text" placeholder="Nome" 
                icon={iconUser} 
                onChange={(e)=>setRealName(e.target.value,e)}
                
            />
            <Input name={errorLogin?"error":errorRegisterUser?"error":"USERNAME"} type="text" placeholder={props.name=="Login"?"Usuário":"Nome"}  
                onChange={(e)=>setUserName(e.target.value,e)}
                icon={props.name=="Login"?iconUser:iconFingerprint}
                maxLength={255}
            />
            {errorRegisterUser && <p className={Style.error}>Usuário já existe!</p>}
            <Input name="NASCIMENTO" type="date" placeholder="Nascimento" 
                icon={iconCalendar} 
                onChange={(e)=>setNascimento(e.target.value)}
            />
            <Input name="EMAIL" type="email" placeholder="Email" 
                icon={iconAt} 
                onChange={(e)=>setEmail(e.target.value)}
            />
            <Input name={errorLogin?"error":errorRegisterPassword?"error":"PASSWORD"}
             type="password" placeholder="Senha" 
                icon={iconLock} 
                onChange={(e)=>setPassword(e.target.value)}
                minLength={6}
                maxLength={50}
            />
            <Input name={errorRegisterPassword?"error":"CONFIRMPASSWORD"} type="text" placeholder="Confirmar senha" 
                icon={iconConfirm} 
                onChange={(e)=>setConfirmPassword(e.target.value)}
            />
            {errorRegisterPassword && <p className={Style.error}>As senhas não correspondem!</p>}
            {errorLogin && <p className={Style.error}>Usuário e/ou Senha inválidos.Por favor, tente novamente!</p>}
            <Button onClick={props.name=="Login"?userLogin:verifInputs}
             text="Entrar" name="LOGIN"/>
        </form>
    )
}
export default Formulario