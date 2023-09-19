import Style from './index.module.css'

interface propsButton{
    text:string
}
const Button:React.FC<propsButton>=({text})=>{
    return(
        <button className={Style.buttonDefault}>
            {text}
        </button>
    )
}

export default Button