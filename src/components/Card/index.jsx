import { useState } from "react";
import styles from "./Card.module.scss";

const Card = ({ product, onAdd, isInCart }) => {

  const { id, title, imageUrl, price } = product;
  const [isAdded, setIsAdded] = useState(isInCart);

  const onClickAdd = () => {
    onAdd({ id, title, imageUrl, price }, isAdded);
    setIsAdded(true);
  }

  return (
    <div className={`${styles.card} d-flex flex-column`}>
      <img width={32} height={32} className={styles.favorite} src="./src/assets/img/heart-unliked.svg" alt="unliked" />
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
