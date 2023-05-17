import { ListCard, SubTitle } from 'components'
import { ListRenderContainer } from './styles'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return <SubTitle>Sua lista está vazia, crie um novo item clicando em "Adicionar"</SubTitle>
  }

  return (
    <ListRenderContainer>
      {
        list.map((item) =>
          (<ListCard
          onClick={onEdit}
          key={item?._id}
          item={item}
          onCheckItem={onCheckItem} />))
      }
    </ListRenderContainer>
  )
}
