import styles from "./Perfil.module.css"

import ImgEsquerda from "/images/ImagemEsquerda.png"
import ImgDireita from "/images/ImagemDireita.png"
import ImgUsuario from "/images/Usuário.png"

import Cabecalho from "@/Components/Cabecalho"
import Rodape from "@/Components/Rodape"
import Botao from "@/Components/Botao"

export default function Perfil() {
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
        <img
          className={styles.imagemUsuario}
          src={ImgUsuario}
          alt="Imagem usuario"
        />

        <Cabecalho />

        <div className={styles.perfil}>
          <form className={styles.form}>
            <h3>Perfil</h3>
            <div>
              <label htmlFor="">Nome</label>
              <input type="email" placeholder="Digite seu nome" />
            </div>
            <div>
              <label htmlFor="">Telefone</label>
              <input type="email" placeholder="Digite seu telefone" />
            </div>
            <div>
              <label htmlFor="">Cidade</label>
              <input type="email" placeholder="Digite o nome da cidade" />
            </div>
            <div>
              <label htmlFor="">Sobre</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="5"
                placeholder=""
              ></textarea>
            </div>
          </form>

          <Botao>Salvar</Botao>
        </div>
      </div>

      <Rodape />
    </>
  )
}
