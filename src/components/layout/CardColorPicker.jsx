import styles from './CardColorPicker.module.css'

const CardColorPicker = ({ colorList, cardColor, setCardColor }) => {
  return (
    <div className={styles.colorContainer}>
      {colorList?.map(color => (
        <div
          key={`color-${color}`}
          className={styles.colorOption}
          onClick={() => setCardColor(color)}
        >
          <div style={{ backgroundColor: color }} />
        </div>
      ))}
    </div>
  )
}

export default CardColorPicker
