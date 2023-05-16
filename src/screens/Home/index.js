import { Button, Input } from 'components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SAVE_USERNAME_PATH } from 'services/constants'
import { ScreenContainer, ContentContainer, BagImage, HomeTitle, HomeSubtitle, ButtonContainer } from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const onClickContinue = () => {
    if (username.length < 3) {
      alert('Usuário deve conter mais de 3 caracteres.')
      return
    }
    localStorage.setItem(SAVE_USERNAME_PATH, username)
    navigate('/list')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage/>
        <HomeTitle>Sua lista de supermercado mais fácil do que nunca!</HomeTitle>
        <HomeSubtitle>Ajudamos você a organizar sua lista de compras de forma descomplicada</HomeSubtitle>
        <HomeSubtitle maxwidth={350} txalign={'left'} mgbottom={16}>Digite abaixo seu usuário para ter acesso à sua lista de compras:</HomeSubtitle>
        <Input
        onChange={(text) => setUsername(text)}
        value={username}
        label='Username'
        placeholder='Ex: usuario1'
        handleKeyDown={onClickContinue} />
        <ButtonContainer>
          <Button onClick={onClickContinue} >Login</Button>
        </ButtonContainer>
      </ContentContainer>
    </ScreenContainer>
  )
}
