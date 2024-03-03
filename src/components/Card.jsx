const Card = () => {
  return (
    <div className="card d-flex flex-column">
      <img width={32} height={32} className='favorite' src="./src/assets/img/heart-unliked.svg" alt="unliked" />
      <img width={133} height={112} src="./src/assets/img/sneakers/1.jpeg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>12 999 руб.</b>
        </div>
        <img className="cu-p" width={32} height={32} src="./src/assets/img/btn-plus.svg" alt='Добавить товар' />
      </div>
    </div>
  )
}

export default Card;
