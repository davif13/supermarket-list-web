import React from 'react'
import './index.css'

export const Input = ({ label, placeholder, value, onChange, type, handleKeyDown }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && handleKeyDown) {
      handleKeyDown()
    }
  }

  return (
    <div className='input-container'>
      <span className='input-label'>{label}</span>
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className='input'
        placeholder={placeholder}
        type={type || 'text'}
        onKeyDown={handleKeyPress} // Adicione essa linha
      />
    </div>
  )
}
