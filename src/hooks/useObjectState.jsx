import { useState } from "react"

export function useObjectState(initialValue = {}) {
  const [value, setValue] = useState(initialValue)

  function handleChangeValue(value, attributeName) {
    if(!Object.hasOwn(initialValue, attributeName))
      throw new Error(`Invalid attribute called on 'useObjectState' hook: ${attributeName} to ${value}.`)
    
    setValue(state => ({
      ...state,
      [attributeName]: value
    }))
  }

  function resetValue() {
    setValue(initialValue)
  }

  return [value, handleChangeValue, resetValue]
}