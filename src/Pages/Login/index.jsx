import styles from "./Login.module.css"

import ImgEsquerda from "/images/ImagemEsquerda.png"
import ImgDireita from "/images/ImagemDireita.png"
import LogoAzul from "/images/LogoAzul.png"
import Patas from "/images/Patas.png"

import Cabecalho from "@/Components/Cabecalho"
import Rodape from "@/Components/Rodape"
import Botao from "@/Components/Botao"

import { FaEye, FaEyeSlash } from "react-icons/fa"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const createUserFormSchema = z.object({
  email: z
    .string()
    .nonempty("O e-mail é obrigatorio")
    .email("Formato de e-mail inválido"),
  password: z.string().min(6, "Mínimo 6 caracteres"),
})

export default function Login() {
  const [senhaVisivel, setSenhaVisivel] = useState(false)

  const mudarVisibilidadeDaSenha = () => {
    setSenhaVisivel(!senhaVisivel)
  }

  const [saida, setSaida] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  })

  function criarUsuario(data) {
    setSaida(JSON.stringify(data, null, 2))
  }

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
        <img className={styles.patas} src={Patas} alt="Patas" />

        <Cabecalho />

        <div className={styles.login}>
          <img src={LogoAzul} alt="logo azul" />
          <p>Já tem conta? Faça seu login:</p>

          <form className={styles.form} onSubmit={handleSubmit(criarUsuario)}>
            <div>
              <label htmlFor="">Email</label>
              <input
                type="email"
                {...register("email")}
                placeholder="Digite seu e-mail"
              />
            </div>
            {errors.email && <span>{errors.email.message}</span>}
            <div className={styles.senha}>
              <label htmlFor="">Senha</label>
              <input
                type={senhaVisivel ? "text" : "password"}
                {...register("password")}
                placeholder="Digite sua senha"
              />
              <span
                className={styles.inputVerSenha}
                onClick={mudarVisibilidadeDaSenha}
              >
                {senhaVisivel ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && <span>{errors.password.message}</span>}
            <Botao Type='submit'>Entrar</Botao>
          </form>
          <pre>{saida}</pre>
        </div>
      </div>

      <Rodape />
    </>
  )
}
