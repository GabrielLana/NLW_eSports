import { InputHTMLAttributes } from "react";


interface InputProprs extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: InputProprs) {
    return (
        <input 
        {...props}
        className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
        /> 
    )
    }