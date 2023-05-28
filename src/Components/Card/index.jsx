import { Link } from "react-router-dom"
import styles from "./Card.module.css"

import iconeResponsavel from "/images/ícone_mensagem.png"

export default function Card({
  imagem,
  nome,
  idade,
  descricao,
  tracos,
  localizacao,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={imagem} alt="" />
      </div>
      <div className={styles.conteudoContainer}>
        <h2>{nome}</h2>
        <p>{idade}</p>
        <p>{descricao}</p>
        <p>{tracos}</p>
        <br />
        <p>{localizacao}</p>
        <div className={styles.msgIcone}>
          <Link className={styles.link} to="/mensagem">
            <img src={iconeResponsavel} alt="" />
            <span>Falar com responsável</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
