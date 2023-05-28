import styles from "./Inicio.module.css"

import ImgEsquerda from "/images/ImagemEsquerda.png"
import ImgDireita from "/images/ImagemDireita.png"
import ImgMeio from "./ImagemMeio.png"
import LogoAzul from "/images/LogoAzul.png"

import Cabecalho from "@/Components/Cabecalho"
import Rodape from "@/Components/Rodape"
import Botao from "@/Components/Botao"

import { Link } from "react-router-dom"

export default function Inicio() {
  return (
    <>
      <div
        className={styles.container}
      >
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

        <div className={styles.imgMeio}>
          <img src={ImgMeio} alt="imagem do meio" />
        </div>
      </div>
      <Cabecalho />
      <div className={styles.loginInicio}>
        <img src={LogoAzul} alt="" />
        <h2>Boas vindas!</h2>
        <p>
          Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje?
          Vem com a gente!
        </p>

        <Link to="/login">
          <Botao>Já tenho conta</Botao>
        </Link>

        <Link to="/cadastro">
          <Botao>Quero me cadastrar</Botao>
        </Link>
      </div>
      <Rodape />
    </>
  )
}
