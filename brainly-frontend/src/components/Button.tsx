import type { ReactElement } from "react";

interface ButtonProps {
    varient: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: String;
    startIcon?: any;
    endIcon?: ReactElement;
    onClick?: () => void;
}

const varientStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"

}

const sizeStyles = {
    "sm": "px-2 py-1",
    'md': "py-2 px-4",
    "lg": "px-6 py-4"
}

const defaultStyles = "rounded-md flex items-center"  

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} className={`${varientStyles[props.varient]} ${defaultStyles} ${sizeStyles[props.size]}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text}</button>
}   