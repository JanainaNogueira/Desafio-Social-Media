import Style from './index.module.css'

type PropsInput ={
    placeholder:string,
    type:string,
    icon:string
}

const Input: React.FC<PropsInput> = ({placeholder,type,icon})=>{
    const style:React.CSSProperties = {
        backgroundImage: `url(${icon})`
      }
    return(
        <input className={Style.input} type={type} placeholder={placeholder}
        style={style}/>
    )
}

export default Input