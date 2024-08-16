const OWNER_MIN_LENGTH = 5 // Minimum length of the owner's full name

function getExpireDateError(
  expireDate // String, "MM/YY" formated
) {
  try {
    // Process received date
    const expireDateArray = expireDate.split("/")
      .map(datePart => parseInt(datePart))
    const [expireMonth, expireYear] = expireDateArray

    if(expireMonth < 1 || expireMonth > 12) {
      return "O mês da Data de Expiração do cartão é inválido."
    }


    // Process current date
    const currentDate = new Date()
    const currentMonth = currentDate.getMonth() + 1
    const currentYear = currentDate.getFullYear() % 100

    if (currentYear > expireYear || (
      expireYear === currentYear &&
      currentMonth > expireMonth
    )) {
      return "O cartão informado já se expirou."
    }

    return null
  } catch(error) {
    console.error(error)

    return "Por favor, insira um formato de Data de Expiração válido."
  }
}


function getOwnerError(owner) {
  if(!owner)
    return "Por favor, insira o nome do titular"

  if(owner?.length < OWNER_MIN_LENGTH)
    return `O nome do titular precisa ter pelo menos ${OWNER_MIN_LENGTH} caracteres.`

  return null
}


export function isCreditCardValid(
  creditCard, // creditCard object, from form
  creditCardInfo // creditCardInfo object, from useCreditCardStatus
) {
  const { owner, expireDate } = creditCard
  const { isNumberValid, isSecurityCodeValid } = creditCardInfo

  const ownerError = getOwnerError(owner)
  if(ownerError) {
    throw new Error(ownerError)
  }

  if(!isNumberValid) {
    throw new Error("O Número do Cartão informado é inválido. Por favor, confira-o.")
  }

  const expireDateError = getExpireDateError(expireDate)
  if(expireDateError) {
    throw new Error(expireDateError)
  }

  if(!isSecurityCodeValid) {
    throw new Error("O Código de Segurança informado é inválido. Por favor, confira-o.")
  }

  return true
}
