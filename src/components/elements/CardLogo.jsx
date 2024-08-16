import styles from './CardLogo.module.css'

import AmericanExpress from '../../assets/american_express.svg'
import DinersClub from '../../assets/diners_club.svg'
import Discover from '../../assets/discover.svg'
import Elo from '../../assets/elo.svg'
import JCB from '../../assets/jcb.svg'
import Maestro from '../../assets/maestro.svg'
import Mastercard from '../../assets/mastercard.svg'
import Mir from '../../assets/mir.svg'
import Unionpay from '../../assets/unionpay.svg'
import Visa from '../../assets/visa.svg'

const cardLogos = {
  "American Express": AmericanExpress,
  "Diners Club": DinersClub,
  "Discover": Discover,
  "Elo": Elo,
  "JCB": JCB,
  "Maestro": Maestro,
  "Mastercard": Mastercard,
  "Mir": Mir,
  "Unionpay": Unionpay,
  "Visa": Visa
}

const CardLogo = ({ type, ...props }) => {
  const cardLogo = cardLogos[type]

  if(!cardLogo)
    return null

  return (
    <img
      src={cardLogo}
      alt="Card Logo"
      {...props}
    />
  )
}

export default CardLogo
