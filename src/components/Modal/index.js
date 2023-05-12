import './index.css';
import { useEffect, useState } from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { createItem, updateItem, deleteItem } from '../../services/requests';

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert('Nome deve ter mais de dois caracteres');
      return false;
    }

    if (quantity < 1) {
      alert('Quantidade deve ser maior que zero');
      return false;
    }

    return true;
  }

  const callAddItem = async () => {
    const validate = validateBeforeSave();

    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) });
      if (!result?.error){
        alert('Item salvo com sucesso');
        onClose();
      }
    }
  }

  const callUpdateItem = async () => {
    const validate = validateBeforeSave();

    if (validate) {
      const result = await updateItem(item?._id, { 
        name, 
        quantity: Number(quantity),
        checked: item?.checked });
      if (!result?.error){
        alert('Item salvo com sucesso');
        onClose();
      }
    }
  }

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id);
    if (!result?.error){
      alert('Item salvo com sucesso');
      onClose();
    }
  }

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name);
      setQuantity(item?.quantity);
    }
  }, [item])

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h1>{item ? 'Editar Item' : 'Adicionar Novo Item'}</h1>
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
       <div className='buttons-container'>
        {item && (
            <Button variant='outline' onClick={callDeleteItem} icon="trash">
            Deletar Item
          </Button>)
          }
          <Button onClick={item ? callUpdateItem : callAddItem}>
            {
              item ? 'Atualizar' : 'Adicionar'
            }
          </Button>
       </div>
      </div>
    </div>
  )
}