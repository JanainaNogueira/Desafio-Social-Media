import {AiOutlineEllipsis} from 'react-icons/ai'
import { useState } from 'react'

import iconCamera from '../../assets/img/camera.svg'
import iconImage from '../../assets/img/iconImage.svg'
import iconClip from '../../assets/img/clip.svg'
import iconPin from '../../assets/img/localizacao.svg'
import iconEmoji from '../../assets/img/emoji.svg'
import Style from './index.module.css';

function BoxPost(){
    const [isLike, setIsLike] = useState(false)
    const handleLike=()=>{
        setIsLike(!isLike)
    }
    return(
        <div className={Style.boxComment}>
            <div className={Style.infoPost}>
                <div className={Style.perfilIcon}></div>
                <div className={Style.infoPost__info}>
                    <h3>Nome Perfil</h3>
                    <p>48 minutos atrás</p>
                </div>
                <AiOutlineEllipsis/>
            </div>
            <div className={Style.message}>
                <p>Mensagem</p>
            </div>
            <div className={Style.buttonAction}>
                <button onClick={handleLike} className={isLike?Style.buttonClicked:Style.buttonDefaul}>Curtir</button>
                <button className={Style.buttonDefaul}>Comentários</button>
                <button className={Style.buttonDefaul}>Compartilhar</button>
            </div>
            <div className={Style.actionComment}>
                <div className={Style.iconPerfil}></div>
                <div className={Style.comments}>
                    <input/>
                    <img src={iconCamera}/>
                    <img src={iconImage}/>
                    <img src={iconClip}/>
                    <img src={iconPin}/>
                    <img src={iconEmoji}/>
                </div>
            </div>
        </div>
    )
}

export default BoxPost