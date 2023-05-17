import { useEffect, useState } from 'react'
import { Input } from 'components/Molecules'
import { Title, Button } from 'components/Atoms'
import { createItem, updateItem, deleteItem } from 'services/requests'
import {
  ModalBackgroundContainer,
  ModalContentContainer,
  ModalHeaderContainer,
  ModalCloseButton,
  ModalButtonsContainer
} from './styles'

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert('Nome deve ter mais de dois caracteres')
      return false
    }

    if (quantity < 1) {
      alert('Quantidade deve ser maior que zero')
      return false
    }

    return true
  }

  const callAddItem = async () => {
    const validate = validateBeforeSave()

    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) })
      if (!result?.error) {
        alert('Item salvo com sucesso')
        onClose()
      }
    }
  }

  const callUpdateItem = async () => {
    const validate = validateBeforeSave()

    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked
      })
      if (!result?.error) {
        alert('Item salvo com sucesso')
        onClose()
      }
    }
  }

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id)
    if (!result?.error) {
      alert('Item excluído com sucesso')
      onClose()
    }
  }

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name)
      setQuantity(item?.quantity)
    }
  }, [item])

  return (
    <ModalBackgroundContainer>
      <ModalContentContainer>
        <ModalHeaderContainer>
          <Title>{item ? 'Editar Item' : 'Adicionar Novo Item'}</Title>
          <ModalCloseButton onClick={onClose} />
        </ModalHeaderContainer>
        <Input
        onChange={(text) => setName(text)}
        value={name}
        label='Nome'
        placeholder='Ex: Macarrão'
        />
        <Input
        onChange={(text) => setQuantity(text)}
        value={quantity}
        label='Quantidade'
        type='number'
        handleKeyDown={item ? callUpdateItem : callAddItem} />
       <ModalButtonsContainer>
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
       </ModalButtonsContainer>
      </ModalContentContainer>
    </ModalBackgroundContainer>
  )
}
