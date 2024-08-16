import creditCardType from "credit-card-type"

const GAP = ' '

export function useCreditCardStatus(creditCard) {
  const {
    number, // String
    securityCode // String
  } = creditCard 

  function processCardInfo(cardInfo) {
    const { code, gaps, lengths } = cardInfo

    return {
      ...cardInfo,
      securityCodeName: code.name, // String
      isSecurityCodeValid: code.size === securityCode.length, // bool
      formatedNumber: number.split("")
        .map((digit, digitPosition) => gaps.includes(digitPosition)
          ? `${GAP}${digit}`
          : digit
        ).join(""), // String
      isNumberValid: lengths.includes(number.length) // bool
    }
  }

  const creditCardInfo = creditCardType(number)
  
  const { length } = creditCardInfo

  if(length <= 0)
    return {} // Tipo inválido de cartão
  
  if(length === 1)
    return processCardInfo(creditCardInfo.pop()) // Um único tipo de cartão

  return creditCardInfo.map(cardInfo => processCardInfo(cardInfo)) // Vários tipos de cartão
}
