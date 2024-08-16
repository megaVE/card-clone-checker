import styles from './CardChip.module.css'

const CardChip = ({
  className = "",
  width,
  backgroundColor = "#daa520",
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${styles.chipContainer} ${className}`}
      style={{ width, backgroundColor }}
    >
      <div className={styles.firstShape}></div>
      <div className={styles.secondShape}></div>
    </div>
  )
}

export default CardChip
