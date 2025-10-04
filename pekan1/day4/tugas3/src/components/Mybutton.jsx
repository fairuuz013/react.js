import { Children } from "react"
import style from "./Button.module.css"

function MyButton({type, children, onClick}) {

    const buttonClass = `${style.button} ${type === 'primary' ?  style.primary :''}`
    return (
        <button className={buttonClass} onClick={onClick} > {children}
            
        </button>
    )

}
 
export default MyButton