import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>
        Card checker
      </h1>
      <p>
        Descubra aqui se seu cartão foi clonado, se suas informações sensíveis foram divulgadas, aprenda como proteger-se de eventuais golpes e muito mais.
      </p>
    </header>
  )
}

export default Header
