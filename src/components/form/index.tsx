import {useSelector} from "react-redux"
import Style from './index.module.css'
import Input from '../../components/input'
import iconUser from '../../assets/img/user.svg'
import iconLock from  '../../assets/img/lock.svg'
import iconFingerprint from '../../assets/img/fingerprint.svg'
import iconCalendar from '../../assets/img/calendar.svg'
import iconAt from '../../assets/img/at.svg'
import iconConfirm from '../../assets/img/confirm.svg'
import Button from '../../components/button'
import rootReducer from "../../redux/root-reducer"
interface propsForm{
    name:string
}
const Formulario:React.FC<propsForm>=({name})=>{
    const {currentUser} =useSelector(rootReducer=> rootReducer.userReducer)
    console.log(currentUser)
    return(
        <form className={name=="Login"?Style.form_login:Style.form_register}>
            <h2>{name}</h2>
            <Input type="text" placeholder="Nome" 
                icon={iconUser}
            />
            <Input type="text" placeholder="Usuário" 
                icon={iconFingerprint}
            />
            <Input type="date" placeholder="Nascimento" 
                icon={iconCalendar}
            />
            <Input type="email" placeholder="Email" 
                icon={iconAt}
            />
            <Input type="password" placeholder="Senha" 
                icon={iconLock}
            />
            <Input type="text" placeholder="Confirmar senha" 
                icon={iconConfirm}
            />
            <Button text="Entrar"/>
        </form>
    )
}
export default Formulario