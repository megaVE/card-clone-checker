import styles from './CardDisplay.module.css'

import CardChip from '../elements/CardChip'
import CardLogo from '../elements/CardLogo'

import { shortenString } from '../../utils/auxiliarFunctions'

const MAX_NUMBER_LENGTH = 25
const MAX_OWNER_LENGTH = 32
const EMPTY_SPACE = "\u200B"

// Source:
// https://commons.wikimedia.org/wiki/Main_Page

const CardDisplay = ({
  creditCard,
  creditCardStatus : cardStatus,
  cardColor
}) => {
  const { number, owner, expireDate, securityCode } = creditCard
  const creditCardStatus = Array.isArray(cardStatus)
    ? {}
    : cardStatus
  const { niceType } = creditCardStatus
  const cardNumber = creditCardStatus?.formatedNumber || number

  const fontSize = (() => {
    return "1.6em"
  })()

  return (
    <div className={styles.cardsContainer}>
      <div
        className={styles.cardFront}
        style={{ backgroundColor: cardColor }}
      >
        <div className={styles.cardFrontDetails}>
          <div className={styles.cardChip}>
            <CardChip
              width="5rem"
            />
          </div>
        </div>
        <div className={styles.cardFrontContent}>
          <div className={styles.cardNumber}>
            <span style={{ fontSize }}>
              {cardNumber
                ? shortenString(cardNumber, MAX_NUMBER_LENGTH)
                : EMPTY_SPACE
              }
            </span>
          </div>
          <div className={styles.cardFrontBottom}>
            <div className={styles.cardDateAndName}>
              <span>
                {expireDate || EMPTY_SPACE}
              </span>
              <span>
                {owner
                  ? shortenString(owner, MAX_OWNER_LENGTH)
                  : EMPTY_SPACE
                }
              </span>
            </div>
            <CardLogo type={niceType} />
          </div>
        </div>
      </div>
      <div
        className={styles.cardBack}
        style={{ backgroundColor: cardColor }}
      >
        <div className={styles.cardStrip} />
        <div className={styles.cardSafetyNumber}>
          <span>
            {securityCode || EMPTY_SPACE}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardDisplay
