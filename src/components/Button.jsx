import buttonStyle from 'styles/Button.module.css'
import { Link } from 'react-router-dom'


export const Button = ({ styletype, text, link}) => {
   return (
      <Link to={link} className={buttonStyle.link}>
         <div className={buttonStyle.div} styletype={styletype || "default"}>{text}</div>
      </Link>
   )
}
