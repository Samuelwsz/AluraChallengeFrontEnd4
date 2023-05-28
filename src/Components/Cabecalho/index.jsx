import { Link } from "react-router-dom"
import styles from "./Cabecalho.module.css"

import Casa from "/images/Casa.png"
import Logo from "/images/Logo.png"
import Mensagens from "/images/Mensagens.png"

export default function Cabecalho() {
  return (
    <header>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.icons}>
        <Link to="/mensagem">
          <img src={Mensagens} alt="" />
        </Link>

        <Link to="/">
          <img src={Casa} alt="" />
        </Link>
      </div>
    </header>
  )
}
