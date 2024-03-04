import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={`${styles.card} d-flex flex-column`}>
      <img width={32} height={32} className={styles.favorite} src="./src/assets/img/heart-unliked.svg" alt="unliked" />
      <img width={133} height={112} src={props.imageUrl} alt="" />
      <h5>{props.title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{props.price} руб.</b>
        </div>
        <img className="cu-p" width={32} height={32} src="./src/assets/img/btn-plus.svg" alt='Добавить товар' />
      </div>
    </div>
  )
}

export default Card;
