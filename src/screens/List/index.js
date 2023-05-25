import { getList, updateItem } from 'services/requests'
import { useEffect, useState } from 'react'
import { ListRender, Modal } from 'components/Organisms'
import { Button, Loader, Title } from 'components/Atoms'
import {
  ListScreenContainer,
  ListScreenContentContainer,
  ListScreenHeaderContainer,
  ListScreenTitleContainer,
  ListScreenHeaderButtonContainer,
  LogoImage,
  ListScreenListContainer
} from './styles'

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  const loadListItems = async () => {
    setLoading(true)
    const result = await getList()
    setListData(result)
    setLoading(false)
  }

  const onClickAddButton = () => {
    setSelectedItem(null)
    setModalVisible(true)
  }

  const onCloseModal = () => {
    setModalVisible(false)
    loadListItems()
    setSelectedItem(null)
  }

  const onEditItem = (item) => {
    setSelectedItem(item)
    setModalVisible(true)
  }

  const onCheckItem = async (item) => {
    const result = await updateItem(item?._id, {
      name: item.name,
      quantity: Number(item.quantity),
      checked: !item.checked
    })

    if (!result.error) {
      await loadListItems()
    }
  }

  useEffect(() => {
    loadListItems()
  }, [])
  return (
    <ListScreenContainer>
      <ListScreenContentContainer>
        <ListScreenHeaderContainer>
          <ListScreenTitleContainer>
            <LogoImage
              src="/images/grocery-cart.png"
              alt="Supermarket List Logo"
            />
            <Title
              fontsizemob={1.2}
              fontsize={1.8}
              ml={12}
              align="left"
              lineheight={24}
            >
              Lista Supermercado
            </Title>
          </ListScreenTitleContainer>
          <ListScreenHeaderButtonContainer>
            <Button onClick={onClickAddButton}>
              {window.innerWidth <= 480 ? '+' : 'Adicionar'}
            </Button>
          </ListScreenHeaderButtonContainer>
        </ListScreenHeaderContainer>
        <ListScreenListContainer>
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onCheckItem={onCheckItem}
              onEdit={onEditItem}
              list={listData}
            />
          )}
        </ListScreenListContainer>
      </ListScreenContentContainer>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </ListScreenContainer>
  )
}
