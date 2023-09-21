import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {login} from '../../redux/users/usersReducer'
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

const Formulario:React.FC<propsForm>=({name})=>{
    const [userName,setUserName]=useState('')
    const [password, setPassword]=useState('')
    const [isOn,setIsOn]=useState(false)

    const loginValue = useAppSelector(state=>state.users)
    const dispatch = useAppDispatch()

    //verifica os dados de login
    function userLogin(event){
        event.preventDefault()
        users.map((user)=>{
            if(user.usuario.usuario === userName && user.usuario.password === password){
                dispatch(login({userName,password}))
                console.log('logado')
            }else{
                console.log("dados incorretos")
            }
        })
        
        
        
    }
    //verifica os dados de registro
    function userRegister(event){
        event.preventDefault()
        console.log('register')
    }

    return(
        <form className={name=="Login"?Style.form_login:Style.form_register}>
            <h2>{name}</h2>
            <Input type="text" placeholder={name=="Login"?"Usuário":"Nome"} 
                icon={iconUser} onChange={(e)=>setUserName(e.target.value)}
            />
            <Input type="text" placeholder="Usuário" onChange={(e)=>setUserName}
                icon={iconFingerprint}
            />
            <Input type="date" placeholder="Nascimento" 
                icon={iconCalendar} onChange={(e)=>setUserName}
            />
            <Input type="email" placeholder="Email" 
                icon={iconAt} onChange={(e)=>setUserName}
            />
            <Input type="password" placeholder="Senha" 
                icon={iconLock} onChange={(e)=>setPassword(e.target.value)}
            />
            <Input type="text" placeholder="Confirmar senha" 
                icon={iconConfirm} onChange={(e)=>setUserName}
            />
            <Button onClick={name=='Login'?userLogin:userRegister}
            //onClick={name=="Login"?handleLoginClick:handleRegisterClick}
             text="Entrar"/>
        </form>
    )
}
export default Formulario