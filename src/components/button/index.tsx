import Style from './index.module.css'

interface propsButton{
    text:string,
    name:string
    onClick:()=>void
}
const Button:React.FC<propsButton>=({text,onClick,name})=>{
    const buttonClassName =`${Style.buttonDefault} ${name=="Login"?Style.buttonTextBig:Style.buttonTextSmall}`
    
    return(
        <button onClick={onClick} className={buttonClassName}>
            {text}
        </button>
    )
}

export default Button