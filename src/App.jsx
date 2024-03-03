import Header from './components/Header';
import Drawer from './components/Drawer';
import Card from './components/Card';

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
          <Card />
          <Card />
          <Card />
          <div className="card d-flex flex-column">
            <img width={133} height={112} src="./src/assets/img/sneakers/2.jpeg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <img width={32} height={32} src="./src/assets/img/btn-plus.svg" alt='Добавить товар' />
            </div>
          </div>
          <div className="card d-flex flex-column">
            <img width={133} height={112} src="./src/assets/img/sneakers/3.jpeg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <img width={32} height={32} src="./src/assets/img/btn-plus.svg" alt='Добавить товар' />
            </div>
          </div>
          <div className="card d-flex flex-column">
            <img width={133} height={112} src="./src/assets/img/sneakers/4.jpeg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <img width={32} height={32} src="./src/assets/img/btn-plus.svg" alt='Добавить товар' />
            </div>
          </div>
          <div className="card d-flex flex-column">
            <img width={133} height={112} src="./src/assets/img/sneakers/4.jpeg" alt="" />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <img width={32} height={32} src="./src/assets/img/btn-plus.svg" alt='Добавить товар' />
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default App
