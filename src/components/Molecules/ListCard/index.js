import { SmallText } from 'components/Atoms'
import { ListCardContainer, CheckImage, CardTextContainer, ArrowIconContainer, ArrowImage } from './styles'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <ListCardContainer>
      <CheckImage
      src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'} `}
      alt='checked-item'
      onClick={() => onCheckItem(item)}
      />
      <CardTextContainer>
        <SmallText mb={4} align='left'>{item?.name}</SmallText>
        <SmallText fontsize={0.875} align='left'>{item?.quantity} unidades</SmallText>
      </CardTextContainer>
      <ArrowIconContainer onClick={() => onClick(item)}>
        <ArrowImage
        src="/images/arrow.svg"
        alt="arrow-icon" />
      </ArrowIconContainer>
    </ListCardContainer>
  )
}
