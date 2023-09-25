import Style from './index.module.css';
import {BsFillPersonFill, BsFillTelephoneFill} from "react-icons/bs";
import {MdCake, MdEmail} from "react-icons/md";
import {HiMapPin} from "react-icons/hi2";

function BoxDescript(){
    return(
        <div className={Style.container}>
            <h2>Sobre</h2>
            <div className={Style.descriptions}>
                <label className={Style.description__icons}>
                    <BsFillPersonFill/>
                    <p>Sexo</p>
                </label>
                <label className={Style.description__icons}>
                    <MdCake/>
                    <p>Nascimento em dia de mes, ano</p>
                </label>
                <label className={Style.description__icons}>
                    <HiMapPin/>
                    <p>Endereço</p>
                </label>
                <label className={Style.description__icons}>
                    <MdEmail/>
                    <p>email</p>
                </label>
                <label className={Style.description__icons}>
                    <BsFillTelephoneFill/>
                    <p>telefone</p>
                </label>
            </div>
        </div>
    )
}

export default BoxDescript