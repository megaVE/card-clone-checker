import styles from './App.module.css'

import { useState } from "react"
import { useObjectState } from "./hooks/useObjectState"
import { useCreditCardStatus } from "./hooks/useCreditCardStatus"

import Header from "./components/layout/Header"
import CardForm from "./components/layout/CardForm"
import Footer from "./components/layout/Footer"
import CardDisplay from "./components/layout/CardDisplay"
import CardColorPicker from './components/layout/CardColorPicker'

const CARD_COLORS = [
  "#d89314",
  "#23d3d3",
  "#197c19",
  "#772b77",
]

const App = () => {
  const [cardColor, setCardColor] = useState(CARD_COLORS[0])

  const [creditCard, setCreditCard] = useObjectState({
    owner: "",
    number: "",
    expireDate: "",
    securityCode: "",
  }) 
  const creditCardStatus = useCreditCardStatus(creditCard)

  return (
    <>
      <Header />
      <section className={styles.cardContainer}>
        <div>
          <CardDisplay
            cardColor={cardColor}
            creditCard={creditCard}
            creditCardStatus={creditCardStatus}
          />
          <CardColorPicker
            colorList={CARD_COLORS}
            cardColor={cardColor}
            setCardColor={setCardColor}
          />
        </div>
        <CardForm
          creditCard={creditCard}
          setCreditCard={setCreditCard}
          creditCardStatus={creditCardStatus}
        />
      </section>
      <Footer />
    </>
  )
}

export default App
