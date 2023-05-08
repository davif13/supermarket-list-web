import { useState, useEffect } from 'react';
import './App.css';
import { ListCard } from './components/ListCard';

const fakelist = [
  {
    id: 0,
    name: 'Arroz',
    quantity: 2,
    checked: false
  },
  {
    id: 1,
    name: 'Feijão',
    quantity: 1,
    checked: false
  },
  {
    id: 2,
    name: 'Macarrão',
    quantity: 5,
    checked: false
  }
]

function App() {
  const [loading, setLoading] = useState(true);
  const [marketList, setMarketList] = useState([]);

  const loadList = () => {
    setLoading(true);
    setTimeout(() => {
      setMarketList(fakelist);
      setLoading(false);
    }, 1000);
  }

  useEffect(() => {
    loadList();
  }, []);

  return (
    <div className="App">
      {loading ? <span>Carregando...</span> : marketList.map((item)=> (
        <ListCard key={`item_${item.id}`} item={item} />
      ))}
    </div>
  );
}

export default App;
