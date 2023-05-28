import styles from "./Mensagem.module.css"

import ImgEsquerda from "/images/ImagemEsquerda.png"
import ImgDireita from "/images/ImagemDireita.png"
import ImgUsuario from "/images/Usuário.png"

import Cabecalho from "@/Components/Cabecalho"
import Rodape from "@/Components/Rodape"
import Botao from "@/Components/Botao"
import { Link } from "react-router-dom"

export default function Mensagem() {
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
        <Link to='/perfil'>
          <img
            className={styles.imagemUsuario}
            src={ImgUsuario}
            alt="Imagem usuario"
          />
        </Link>

        <Cabecalho />

        <div className={styles.mensagem}>
          <p>
            Envie uma mensagem para a pessoa ou instituição que está cuidando do
            animal:
          </p>

          <form className={styles.form}>
            <div>
              <label htmlFor="">Nome</label>
              <input type="email" placeholder="Digite seu nome" />
            </div>
            <div>
              <label htmlFor="">Telefone</label>
              <input type="email" placeholder="Digite seu telefone" />
            </div>
            <div>
              <label htmlFor="">Nome do animal</label>
              <input type="email" placeholder="Digite o nome do animal" />
            </div>
            <div>
              <label htmlFor="">Mensagem</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder="Digite sua mensagem"
              ></textarea>
            </div>
          </form>

          <Botao>Enviar</Botao>
        </div>
      </div>

      <Rodape />
    </>
  )
}
