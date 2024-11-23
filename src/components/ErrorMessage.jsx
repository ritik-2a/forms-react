import style from "./ErrorMessage.module.css";

function ErrorMessage({message}){
    return <>
    {message.length!==0 && <div className={style.message}>{message}</div > }
    </>

}
export default ErrorMessage;