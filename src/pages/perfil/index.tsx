import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import {useState} from 'react'
import Menu from "../../components/menu"
import Header from "../../components/header"
import Button from "../../components/button"
import BoxDescription from "../../components/boxDescription"
import Style from "./index.module.css"

import ImageExcluir2 from '../../assets/img/userImage.png'
import ImageExcluir from "../../assets/img/item-excluir.png"
import BoxPost from "../../components/boxPostagens"
function Perfil(){
    const loginValue = useAppSelector(state=>state.users)
    const dispatch = useAppDispatch()
    
    const [openMenu,setOpenMenu]=useState(false)
    
    const editPerfil=()=>{
        console.log('editar perfil')
    }
    const handleMenu=()=>{
        setOpenMenu(!openMenu)
    }
    return(
        <div className={Style.container}>
        <Header onEventClick={handleMenu}/>
        <Menu hidden={openMenu}/>
        <div className={openMenu?Style.main:Style.mainMenu}>
            <article className={Style.perfilBanner}>
                <img className={Style.imgBanner} src={ImageExcluir}/>
                <div className={Style.information}>
                    <div className={Style. box_information}>
                        <h3>Nome usuário</h3>
                        <p>Descrição</p>
                    </div>
                    <div className={Style.box_button}>
                        <Button text="Editar perfil" onClick={editPerfil} name="PERFIL"/>
                    </div>
                </div>
                <img className={openMenu?Style.imagePerfil:Style.imagePerfil_small} src={ImageExcluir2}/>
            </article>
            <article className={Style.box_postPerfil}>
                <BoxDescription/>
                <div className={Style.postsPerfil}>
                    <div className={Style.titleSection}>
                        <h2>Followers</h2>
                        <h2>Following</h2>
                        <h2>Posts</h2>
                    </div>
                    <BoxPost/>
                    <BoxPost/>
                    <BoxPost/>
                    <BoxPost/>
                    <BoxPost/>

                </div>
            </article>
        </div>
        </div>
    )
}
export default Perfil