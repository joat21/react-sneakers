import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';
import { useEffect, useState } from 'react';

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);

  useEffect(() => {
    fetch('https://65e758b553d564627a8e990a.mockapi.io/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const onAddToCart = (item, isAdded) => {
    if (isAdded) {

      const tempArray = cartItems.filter((cartItem) => (
        cartItem.id !== item.id
      ));

      setCartItems(prev => tempArray);
      return;
    }

    setCartItems(prev => [...prev, item]);
  }

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
            <input type="text" placeholder='Поиск...' />
          </div>
        </div>
        <ul className="d-flex flex-wrap">
          {items.map(item => (
            <Card
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              onAdd={onAddToCart}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
