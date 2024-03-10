import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../components/Card";

const Home = ({ onClickAdd, cartItems, items, onClickFavorite }) => {

  const [searchValue, setSearchValue] = useState('');

  const filteredItems = items
    .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <>
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
          .map((item) => (
            <Card
              key={item.id}
              isInCart={cartItems.map(item => item.id).includes(item.id)}
              onAdd={onClickAdd}
              onFavorite={onClickFavorite}
              {...item}
            />
          )) : <span>{`По запросу "${searchValue}" ничего не найдено`}</span>}
      </ul>
    </>
  )
}

export default Home;
