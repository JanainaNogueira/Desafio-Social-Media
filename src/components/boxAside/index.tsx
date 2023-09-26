import users from '../../data/users'
import Style from "./index.module.css"
import imgUser from "../../assets/img/userImage.png"

import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'


interface boxAsideProps{
    name:string,
    hidden?:boolean
}

const BoxAside:React.FC<boxAsideProps>=({name, hidden})=>{
    const styleAside = `${Style.aside} ${hidden?Style.aside_menuOpen:Style.aside_menuClose}`
    return(
        <div className={styleAside}>
            <div className={Style.aside__title}>
                <h3>{name}</h3>
                <IoIosArrowDown/>
            </div>
            {name=="Meus Amigos"?
            (Array.from({length:4},(_,index)=>(
                <div className={Style.perfil} key={users[index]}>
                    <img src={imgUser}/>
                    <p>{users[index]?.nome}</p>
                </div>
            ))
            ): (
                Array.from({length:4},(_,index)=>(
                    <div className={Style.perfil_menu} key={users[index]}>
                        <img src={imgUser}/>
                        <div>
                        <p>{users[index]?.nome}</p>
                        <p hidden={hidden}>R$preço</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

export default BoxAside