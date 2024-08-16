import styles from './CardForm.module.css'

import FormInputText from '../elements/FormInputText'

import { isCreditCardValid } from '../../utils/validation'

const CardForm = ({ creditCard, setCreditCard, creditCardStatus }) => {
  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      isCreditCardValid(creditCard, creditCardStatus)
      
      alert("Cartão clonado! :o")
    } catch(error) {
      console.error(error)

      alert(error)
    }
  }

  const securityCodeMask = (() => {
    if(Array.isArray(creditCardStatus) || !Object.hasOwn(creditCardStatus, "code"))
      return "999"

    const securityCodeSize = creditCardStatus.code.size

    return "9".repeat(securityCodeSize)
  })()

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <FormInputText
            name="owner"
            label="Titular do Cartão"
            placeholder="FULANO DA SILVA"
            value={creditCard.owner}
            setValue={setCreditCard}
            required
          />
          <FormInputText
            type="number"
            name="number"
            label="Número do Cartão"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            value={creditCard.number}
            setValue={setCreditCard}
            required
          />
          <div className={styles.doubleInput}>
            <FormInputText
              mask="99/99"
              name="expireDate"
              label="Data de Expiração"
              placeholder="MM/AA"
              value={creditCard.expireDate}
              setValue={setCreditCard}
              required
            />
            <FormInputText
              mask={securityCodeMask}
              name="securityCode"
              label="Código de Segurança"
              placeholder={creditCardStatus?.securityCodeName || "CVV"}
              value={creditCard.securityCode}
              setValue={setCreditCard}
              required
            />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">
            Verificar
          </button>
        </div>
      </form>
    </div>
  )
}

export default CardForm
