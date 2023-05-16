import './index.css'
import { getList, updateItem } from 'services/requests'
import { useEffect, useState } from 'react'
import { Button, ListRender, Modal, Loader, Title } from 'components'

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
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className='list-screen-title-container'>
            <img className='logo-image' src="/images/grocery-cart.png" alt="Supermarket List Logo"/>
            <Title fontsize={1.8} ml={12} align='left' lineheight={24}>Lista Supermercado</Title>
          </div>
          <div className='list-screen-header-button-container'>
            <Button onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? '+' : 'Adicionar'}
            </Button>
          </div>
        </div>
        <div className='list-screen-list-container'>
          {
            loading ? <Loader /> : <ListRender onCheckItem={onCheckItem} onEdit={onEditItem} list={listData} />
          }
        </div>
      </div>
      {
        modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />
      }
    </div>
  )
}
