import styles from './FormInputText.module.css'
import ReactInputMask from 'react-input-mask'

const FormInputText = ({
  className = undefined,
  mask, // Para inputs ReactInputMask
  name,
  label = undefined,
  setValue = undefined,
  value,
  type = "text",
  // InlineCSS
  containerStyle = {},
  labelStyle = {},
  inputStyle = {},
  ...props
}) => {
  const handleChangeValue = (e) => {
    if(!setValue)
      throw new Error(`Unable to change value from ${name} FormInputText to ${e.target.value}.`)
    
    setValue(e.target.value, e.target.name)
  }

  return (
    <div
      className={className || styles.inputText}
      style={{...containerStyle}}
    >
      {label && (
        <label style={{...labelStyle}}>
          {label}
        </label>
      )}
      <div className={!className ? styles.inputContainer : ''}>
        {mask ? (
          <ReactInputMask
            mask={mask}
            type={type}      
            style={{...inputStyle}}
            name={name}
            id={name}
            onChange={handleChangeValue}
            value={value}
            {...props}
          />
        ) : (
          <input
            style={{...inputStyle}}
            type={type}
            name={name}
            id={name}
            onChange={handleChangeValue}
            value={value}
            {...props}
          />
        )}
      </div>
    </div>
  )
}

export default FormInputText
