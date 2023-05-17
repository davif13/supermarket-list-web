import React from 'react'
import { InputContainer, InputLabel, InputText } from './styles'

export const Input = ({ label, placeholder, value, onChange, type, handleKeyDown }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && handleKeyDown) {
      handleKeyDown()
    }
  }

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={placeholder}
        type={type || 'text'}
        onKeyDown={handleKeyPress} // Adicione essa linha
      />
    </InputContainer>
  )
}
