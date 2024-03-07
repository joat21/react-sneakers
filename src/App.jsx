import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://65e758b553d564627a8e990a.mockapi.io/items')
      .then(res => setItems(res.data));
  }, []);

  const onAddToCart = (item, isAdded) => {
    if (isAdded) {
      setCartItems(prev => cartItems.filter((cartItem) => (
        cartItem.id !== item.id
      )));

      return;
    }

    setCartItems(prev => [...prev, item]);
  }

  const filteredItems = items
    .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div className="wrapper clear">
      {isCartOpened && <Drawer items={cartItems} onClose={() => setIsCartOpened(false)} />}
      <Header onCartClick={() => setIsCartOpened(true)} />
      <div className="content p-40">
        <div className='d-flex justify-between align-center mb-40'>
          <h1>
            Все кроссовки
          </h1>
          <div className="search-block d-flex align-center">
            <img src="./src/assets/img/search.svg" alt="search" />
            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type="text" placeholder='Поиск...' />
            {searchValue && <img className='remove-btn' onClick={() => setSearchValue('')} src="./src/assets/img/btn-remove.svg" alt="clear" />}
          </div>
        </div>
        <ul className="d-flex flex-wrap">
          {filteredItems.length > 0 ? filteredItems
            .map(item => (
              <Card
                key={item.id}
                product={item}
                onAdd={onAddToCart}
              />
            )) : <span>{`По запросу "${searchValue}" ничего не найдено`}</span>}
        </ul>
      </div>
    </div>
  )
}

export default App;
