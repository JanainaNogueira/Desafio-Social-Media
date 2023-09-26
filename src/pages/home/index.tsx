import {useState} from 'react'
import Style from './index.module.css'
import Header from "../../components/header"
import Menu from "../../components/menu"
import BoxPost from '../../components/boxPostagens'
import BoxAside from '../../components/boxAside'

import BoxUserPost from '../../components/boxUserPost'

function Home(){
    const [openMenu,setOpenMenu]=useState(false)

    const handleMenu=()=>{
        setOpenMenu(!openMenu)
    }
    return(
        <div className={Style.container}>
            <Header onEventClick={handleMenu}/>
            <Menu hidden={openMenu}/>
            <div className={openMenu?Style.main:Style.mainMenu}>
            <div className={Style.container__central}>
            <BoxUserPost/>
                <main className={Style.box_posts}>
                    <BoxPost/>
                    <BoxPost/>
                    <BoxPost/>
                </main>
                
            </div>
            <aside className={Style.destaque}>
                    <BoxAside name={"Meus Amigos"} hidden={openMenu} />
                    <BoxAside name={"Itens em Destaque"} hidden={openMenu}/>
            </aside>
            </div>
        </div>
    )
}

export default Home