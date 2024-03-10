import Card from "../../components/Card";

const Favorites = ({ items, cartItems, onClickAdd, onClickFavorite }) => {
  return (
    <>
      <div className='d-flex justify-between align-center mb-40'>
        <h1>
          Мои закладки
        </h1>
      </div>
      <ul className="d-flex flex-wrap">
        {items.map((item) => (
          <Card
            key={item.id}
            isInCart={cartItems.map(item => item.id).includes(item.id)}
            isInFavorites={true}
            onAdd={onClickAdd}
            onFavorite={onClickFavorite}
            {...item}
          />
        ))}
      </ul>
    </>
  )
}

export default Favorites;
