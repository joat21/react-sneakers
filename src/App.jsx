import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

const sneakers = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    imageUrl: "./src/assets/img/sneakers/1.jpeg",
    price: 12999
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    imageUrl: "./src/assets/img/sneakers/2.jpeg",
    price: 12999
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    imageUrl: "./src/assets/img/sneakers/3.jpeg",
    price: 8499
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    imageUrl: "./src/assets/img/sneakers/4.jpeg",
    price: 8999
  }
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
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
          {sneakers.map(obj => (
            <Card
              title={obj.title}
              imageUrl={obj.imageUrl}
              price={obj.price}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
