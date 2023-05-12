import './index.css';
import { useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';

export const Modal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1>Adicionar Novo Item</h1>
          <button onClick={onClose} className='modal-close-button' />
        </div>
        <Input
        onChange={(text) => setName(text)}
        value={name} 
        label='Nome' 
        placeholder='Ex: Macarrão' />
        <Input
        onChange={(text) => setQuantity(text)}
        value={quantity} 
        label='Quantidade'
        type='number' />
        <div className='modal-spacer'></div>
        <Button>
          Adicionar
        </Button>
      </div>
    </div>
  )
}