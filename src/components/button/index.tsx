import Style from './index.module.css'

interface propsButton{
    text:string,
    onClick:()=>void
}
const Button:React.FC<propsButton>=({text,onClick})=>{
    return(
        <button onClick={onClick} className={Style.buttonDefault}>
            {text}
        </button>
    )
}

export default Button