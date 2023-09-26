import { Link } from 'react-router-dom'
import Logo from '../../assets/img/compass uol negativo.svg'
import Style from './index.module.css'
interface MenuProps{
    hidden:boolean
}
const Menu:React.FC<MenuProps>=({hidden})=>{
    return(
        <aside className={hidden?Style.menu_lateral:Style.menu_open} hidden={hidden}>
            <img src={Logo}/>
            <nav className={Style.menu}>
                <Link to="/home" className={Style.navigationMenu}>Página Inicial</Link>
                <Link to="/perfil" className={Style.navigationMenu}>Meu Perfil</Link>
                <Link to="/home" className={Style.navigationMenu}>Marketplace</Link>
                <Link to="/" className={Style.navigationMenu}>Sair</Link>
            </nav>
        </aside>
    )
}

export default Menu