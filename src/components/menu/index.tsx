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
                <button>Página Inicial</button>
                <button>Meu Perfil</button>
                <button>Marketplace</button>
                <button>Sair</button>
            </nav>
        </aside>
    )
}

export default Menu