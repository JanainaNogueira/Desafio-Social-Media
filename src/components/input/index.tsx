import Style from './index.module.css'

type PropsInput ={
    placeholder:string;
    type:string;
    icon:string;
    onChange:any;
}

const Input: React.FC<PropsInput> = ({placeholder,type,icon,onChange})=>{
    const style:React.CSSProperties = {
        backgroundImage: `url(${icon})`
    }
    return(
        <input className={Style.input}  type={type} placeholder={placeholder}
        style={style} onChange={onChange}/>
    )
}

export default Input