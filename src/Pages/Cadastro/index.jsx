import styles from "./Cadastro.module.css"

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
  nome: z.string().min(4, "O nome é obrigatorio"),
  email: z
    .string()
    .nonempty("O e-mail é obrigatorio")
    .email("Formato de e-mail inválido"),

  password: z.string().min(6, "A senha é obrigatória").nonempty(),
  confirmPassword: z.string().min(6, "Confirmação de senha"),
})

export default function Cadastro() {
  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const [senhaVisivelConfirmacao, setsenhaVisivelConfirmacao] = useState(false)

  const mudarVisibilidadeDaSenha = () => {
    setSenhaVisivel(!senhaVisivel)
  }

  const mudarVisibilidadeConfirmacao = () => {
    setsenhaVisivelConfirmacao(!senhaVisivelConfirmacao)
  }

  const [saida, setSaida] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
  })

  function criarUsuario(data) {
    setSaida(JSON.stringify(data, null, 2))
  }

  const passwordValue = watch("password")

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
      </div>

      <Cabecalho />

      <div className={styles.cadastro}>
        <img src={LogoAzul} alt="logo azul" />
        <p>
          Ainda não tem cadastro? Então, antes de buscar seu melhor amigo,
          precisamos de alguns dados:
        </p>

        <form className={styles.form} onSubmit={handleSubmit(criarUsuario)}>
          <div>
            <label htmlFor="">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("nome")}
            />
          </div>
          {errors.nome && <span>{errors.nome.message}</span>}
          <div>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
          </div>
          {errors.email && <span>{errors.email.message}</span>}
          <div className={styles.senha}>
            <label htmlFor="">Senha</label>
            <input
              type={senhaVisivel ? "text" : "password"}
              placeholder="Digite sua senha"
              {...register("password")}
            />

            <span
              className={styles.inputVerSenha}
              onClick={mudarVisibilidadeDaSenha}
            >
              {senhaVisivel ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.password && <span>{errors.password.message}</span>}
          <div className={styles.senha}>
            <label htmlFor="">Confirme a Senha</label>
            <input
              type={senhaVisivelConfirmacao ? "text" : "password"}
              placeholder="Confirme a senha"
              {...register("confirmPassword")}
            />

            <span
              className={styles.inputVerSenha}
              onClick={mudarVisibilidadeConfirmacao}
            >
              {senhaVisivelConfirmacao ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
          {passwordValue && passwordValue !== watch("confirmPassword") && (
            <span>As senhas não coincidem</span>
          )}
          <Botao Type="submit">Cadastrar!</Botao>
          <pre>{saida}</pre>
        </form>
      </div>

      <Rodape />
    </>
  )
}
