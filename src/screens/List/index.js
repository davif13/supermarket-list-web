import './index.css'
import { getList } from "../../services/requests";
import { useEffect, useState } from "react";
import { Button, ListRender, Loader, Modal } from '../../components/';

export const ListScreen = () =>{
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const loadListItems = async () =>{
    setLoading(true);
    const result = await getList();
    setListData(result);
    setLoading(false);
  }

  const onClickAddButton = () => {
    setModalVisible(true);
  }

  const onCloseModal = () => {
    setModalVisible(false);
  }

  useEffect(() => {
    loadListItems();
  }, [])
  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className='list-screen-title-container'>
            <img className='logo-image' src="/images/logo.png" alt="Supermarket List Logo"/>
            <h1 className='list-screen-header-title'>Lista de Supermercado</h1>
          </div>
          <div className='list-screen-header-button-container'>
            <Button onClick={onClickAddButton}>Adicionar</Button>
          </div>
        </div>
        <div className='list-screen-list-container'>
          {
            loading ? <Loader /> : <ListRender list={listData} />
          }
        </div>
      </div>
      {
        modalVisible && <Modal onClose={onCloseModal} />
      }
    </div>
  );
};