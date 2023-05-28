import styles from "./Home.module.css"

import ImgEsquerda from "/images/ImagemEsquerda.png"
import ImgDireita from "/images/ImagemDireita.png"
import ImgUsuario from "/images/Usuário.png"

import Cabecalho from "@/Components/Cabecalho"
import Rodape from "@/Components/Rodape"

import { Link } from "react-router-dom"
import Cards from "../../Components/Cards"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <img
          className={styles.imagemEsquerda}
          src={ImgEsquerda}
          alt="Imagem esquerda"
        />
        <img
          className={styles.imagemDireita}
          src={ImgDireita}
          alt="Imagem direita"
        />
        <Link to="/perfil">
          <img
            className={styles.imagemUsuario}
            src={ImgUsuario}
            alt="Imagem usuario"
          />
        </Link>

        <Cabecalho />

        <div className={styles.home}>
          <p>Olá! Veja os amigos disponíveis para adoção!</p>
        </div>
        <section>
          <Cards />
        </section>
      </div>

      <Rodape />
    </>
  )
}
