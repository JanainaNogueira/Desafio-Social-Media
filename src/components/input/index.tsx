import { InputHTMLAttributes } from 'react';
import Style from './index.module.css'

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder:string;
    type:string;
    icon:string;
    onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
    name:string;
    maxLength?:number;
    minLength?:number;
}

const Input: React.FC<CustomInputProps> = ({placeholder,type,icon,onChange, name,minLength,maxLength})=>{
    const style:React.CSSProperties = {
        backgroundImage: `url(${icon})`
    }
    const inputClassName=`${Style.input} ${name!="error"?Style.colorInput:Style.error}`
    return(
        <input className={inputClassName}  type={type} placeholder={placeholder}
        style={style} name={name}   onChange={onChange} minLength={minLength} maxLength={maxLength}/>
    )
}

export default Input