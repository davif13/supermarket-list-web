import { Button, Input, Title, SubTitle } from 'components'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SAVE_USERNAME_PATH } from 'services/constants'
import { ScreenContainer, ContentContainer, BagImage, ButtonContainer } from './styles'

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
        <Title>Sua lista de supermercado mais fácil do que nunca!</Title>
        <SubTitle>Ajudamos você a organizar sua lista de compras de forma descomplicada</SubTitle>
        <SubTitle mw={350} align={'left'} mb={16}>Digite abaixo seu usuário para ter acesso à sua lista de compras:</SubTitle>
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
