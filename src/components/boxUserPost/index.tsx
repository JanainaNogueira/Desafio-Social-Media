import Style from './index.module.css'
import Button from '../../components/button'

import iconCamera from '../../assets/img/camera.svg'
import iconImage from '../../assets/img/iconImage.svg'
import iconClip from '../../assets/img/clip.svg'
import iconPin from '../../assets/img/localizacao.svg'
import iconEmoji from '../../assets/img/emoji.svg'

function BoxUserPost(){
    return(
        <div className={Style.actionComment}>
                <div className={Style.actionComment_input}>
                    <div className={Style.iconPerfil}></div>
                    <input placeholder='No que você está pensando? '/>
                </div>
                <div className={Style.comments}>
                    <img src={iconCamera}/>
                    <img src={iconImage}/>
                    <img src={iconClip}/>
                    <img src={iconPin}/>
                    <img src={iconEmoji}/>
                    <div>
                        <Button text="Postar" onClick=""/>
                    </div>
                </div>
            </div>
    )
}

export default BoxUserPost