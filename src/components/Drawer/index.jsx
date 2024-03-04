import styles from "./Drawer.module.scss";

const Drawer = () => {
  return (
    <div style={{ display: 'none' }} className={styles.overlay}>
      <div className={`${styles.drawer} d-flex flex-column`}>
        <h2 className='d-flex justify-between mb-30'>
          Корзина <img className={styles['remove-btn']} src="./src/assets/img/btn-remove.svg" alt="remove" />
        </h2>
        <ul className={`${styles.list} d-flex flex-column`}>
          <li className={`${styles['cart__item']} d-flex align-center`}>
            <img className='mr-20' width={70} height={70} src="./src/assets/img/sneakers/1.jpeg" alt="sneakers" />
            <div className='d-flex flex-column mr-10'>
              <span className='mb-5'>Мужские Кроссовки Nike Air Max 270</span>
              <b>12 999 руб.</b>
            </div>
            <img className={styles['remove-btn']} src="./src/assets/img/btn-remove.svg" alt="remove" />
          </li>
          <li className={`${styles['cart__item']} d-flex align-center`}>
            <img className='mr-20' width={70} height={70} src="./src/assets/img/sneakers/2.jpeg" alt="sneakers" />
            <div className='d-flex flex-column mr-10'>
              <span className='mb-5'>Мужские Кроссовки Nike Air Max 270</span>
              <b>12 999 руб.</b>
            </div>
            <img className={styles['remove-btn']} src="./src/assets/img/btn-remove.svg" alt="remove" />
          </li>
        </ul>
        <div className={styles['cart__total']}>
          <ul className='d-flex flex-column'>
            <li className='d-flex justify-between align-end'>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li className='d-flex justify-between align-end'>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className='btn'>
            Оформить заказ
            <img src="./src/assets/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer;
