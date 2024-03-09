import styles from "./Drawer.module.scss";

const Drawer = ({ onClose, onRemove, items = [] }) => {

  const totalPrice = items.map(item => item.price).reduce((price1, price2) => price1 + price2, 0);

  return (
    <div className={styles.overlay}>
      <div className={`${styles.drawer} d-flex flex-column`}>
        <h2 className='d-flex justify-between mb-30'>
          Корзина <img className={styles['remove-btn']} onClick={onClose} src="./src/assets/img/btn-remove.svg" alt="close" />
        </h2>
        {items.length > 0 ?
          <>
            <ul className={`${styles.list} d-flex flex-column`}>
              {items.map(item => (
                <li key={item.id} className={`${styles['cart__item']} d-flex align-center`}>
                  <img className='mr-20' width={70} height={70} src={item.imageUrl} alt="sneakers" />
                  <div className='d-flex flex-column mr-10'>
                    <span className='mb-5'>{item.title}</span>
                    <b>{item.price} руб.</b>
                  </div>
                  <img onClick={() => onRemove(item.id)} className={styles['remove-btn']} src="./src/assets/img/btn-remove.svg" alt="remove" />
                </li>
              ))}
            </ul>
            <div className={styles['cart__total']}>
              <ul className='d-flex flex-column'>
                <li className='d-flex justify-between align-end'>
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li className='d-flex justify-between align-end'>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice * 0.05).toFixed(2)} руб.</b>
                </li>
              </ul>
              <button className='btn'>
                Оформить заказ
                <img src="./src/assets/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </>
          :
          <div className={`${styles['cart_empty']} d-flex align-center justify-center flex-column flex`}>
            <img className="mb-20" src="./src/assets/img/cartEmpty.png" alt="cart empty" />
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя&nbsp;бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className='btn' onClick={onClose}>
              <img src="./src/assets/img/arrow.svg" alt="arrow" />
              Вернуться назад
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default Drawer;
