import styles from "./Botao.module.css"

export default function Botao({ Type = "button", children, onClick }) {
  return (
    <button className={styles.botao} type={Type} onClick={onClick}>
      {children}
    </button>
  )
}
