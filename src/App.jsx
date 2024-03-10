import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import axios from 'axios';

import Header from './components/Header';
import Drawer from './components/Drawer';

import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';

function App() {

  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isCartOpened, setIsCartOpened] = useState(false);

  useEffect(() => {
    axios.get('https://65e758b553d564627a8e990a.mockapi.io/items')
      .then((res) => setItems(res.data));

    axios.get('https://65e758b553d564627a8e990a.mockapi.io/cart')
      .then((res) => setCartItems(res.data));

    axios.get('https://65ec22db0ddee626c9afa2ce.mockapi.io/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, [])

  const onClickAdd = (obj, isAdded) => {
    if (isAdded) {
      setIsCartOpened(true);
      return;
    }

    axios.post('https://65e758b553d564627a8e990a.mockapi.io/cart', obj)
      .then((res) => setCartItems((prev) => [...prev, res.data]));
  }

  const onRemoveFromCart = (id) => {
    axios.delete(`https://65e758b553d564627a8e990a.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => (item.id !== id)));
  }

  const onClickFavorite = (obj, isFavorited) => {
    if (isFavorited) {
      axios.delete(`https://65ec22db0ddee626c9afa2ce.mockapi.io/favorites/${obj.id}`);
      return;
    }

    axios.post('https://65ec22db0ddee626c9afa2ce.mockapi.io/favorites', obj)
      .then((res) => setFavorites((prev) => [...prev, res.data]));
  }

  return (
    <div className="wrapper clear">
      {isCartOpened && <Drawer items={cartItems} onRemove={onRemoveFromCart} onClose={() => setIsCartOpened(false)} />}
      <Header onCartClick={() => setIsCartOpened(true)} />

      <div className="content p-40">
        <Routes>
          <Route path='/' element={<Home onClickFavorite={onClickFavorite} onClickAdd={onClickAdd} cartItems={cartItems} setCartItems={setCartItems} items={items} setItems={setItems} />} />
          <Route path='/favorites' element={<Favorites items={favorites} cartItems={cartItems} setCartItems={setCartItems} onClickAdd={onClickAdd} onClickFavorite={onClickFavorite} setFavorites={setFavorites} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
