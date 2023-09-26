import {useState} from 'react'
import Style from './index.module.css'

import iconWorld from '../../assets/img/GlobeHemisphereEast.svg'
import iconBell from '../../assets/img/Bell.svg'
interface HeaderProps{
    onEventClick:()=>void;
}
const Header:React.FC<HeaderProps>=({onEventClick})=>{
    const [openMenu,setOpenMenu]=useState(false)
    const handleMenu=()=>{
        setOpenMenu(!openMenu)
        onEventClick()
    }
    return(
        <header className={openMenu?Style.header:Style.headerMenu}>
            <div className={Style.box_logo}>
                <button className={openMenu?Style.button_close:Style.button_open} onClick={handleMenu}></button>
                <p>SocialCompass</p>  
            </div>
            <div className={Style.box_notifications}>
                <img src={iconWorld}/>
                <img src={iconBell}/>
                <p>Nome usuario</p>
                <div className={Style.iconPerfil}></div>
            </div>
        </header>
    )
}

export default Header