import { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ id, title, imageUrl, price, onAdd, onFavorite, isInCart, isInFavorites = false }) => {

  const [isAdded, setIsAdded] = useState(isInCart);
  const [isFavorited, setIsFavorited] = useState(isInFavorites);

  const onClickAdd = () => {
    onAdd({ id, title, imageUrl, price }, isAdded);
    setIsAdded(true);
  }

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price }, isFavorited);
    setIsFavorited(!isFavorited);
  }

  return (
    <div className={`${styles.card} d-flex flex-column`}>
      <img
        className={styles.favorite}
        src={isFavorited ? "./src/assets/img/liked.svg" : "./src/assets/img/unliked.svg"}
        alt={isFavorited ? 'liked' : 'unliked'}
        onClick={onClickFavorite}
      />
      <img width={133} height={112} src={imageUrl} alt="" />
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img className={styles.btn} onClick={onClickAdd} src={isAdded ? "./src/assets/img/btn-added.svg" : "./src/assets/img/btn-plus.svg"} alt='Добавить товар' />
      </div>
    </div>
  )
}

export default Card;
