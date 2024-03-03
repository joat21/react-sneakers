import logo from "./../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="header d-flex align-center justify-between p-40">
      <div className="header__left d-flex align-center">
        <img src={logo} width={40} height={40} alt="Логотип React Sneakers" />
        <div>
          <h3 className='text-uppercase'>React Sneakers</h3>
          <span className='opacity-5'>Магазин лучших кроссовок</span>
        </div>
      </div>
      <ul className="header__right d-flex">
        <li>
          <svg width="20.000000" height="19.181816" viewBox="0 0 20 19.1818" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path id="Vector" d="M7.54547 18.1818C7.09363 18.1818 6.72729 17.8155 6.72729 17.3636C6.72729 16.9118 7.09363 16.5455 7.54547 16.5455C7.99738 16.5455 8.36365 16.9118 8.36365 17.3636C8.36365 17.8155 7.99738 18.1818 7.54547 18.1818Z" stroke="#9B9B9B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" />
            <path id="Vector" d="M16.5455 18.1818C16.0936 18.1818 15.7273 17.8155 15.7273 17.3636C15.7273 16.9118 16.0936 16.5455 16.5455 16.5455C16.9974 16.5455 17.3636 16.9118 17.3636 17.3636C17.3636 17.8155 16.9974 18.1818 16.5455 18.1818Z" stroke="#9B9B9B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" />
            <path id="Vector" d="M1 1L4.27271 1L6.46545 11.9555C6.54028 12.3321 6.74518 12.6705 7.04437 12.9113C7.34351 13.1522 7.71783 13.2801 8.10181 13.2727L16.0546 13.2727C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091L5.09088 5.09091" stroke="#9B9B9B" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round" />
          </svg>
          <span>1205 руб.</span>
        </li>
        <li>
          <svg width="17.900391" height="16.257423" viewBox="0 0 17.9004 16.2574" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path id="Vector" d="M12.9537 0C14.3511 0 15.5248 0.47123 16.4751 1.41369C17.4253 2.35615 17.9004 3.5065 17.9004 4.86475C17.9004 5.53002 17.7607 6.20222 17.4812 6.88134C17.2017 7.56046 16.8943 8.16336 16.5589 8.69003C16.2235 9.2167 15.6576 9.89582 14.8611 10.7274C14.0646 11.559 13.3939 12.2312 12.8489 12.744C12.3039 13.2568 11.4305 14.0399 10.2288 15.0932L8.92926 16.2574L7.6297 15.1348C6.45587 14.0537 5.58948 13.2568 5.03058 12.744C4.47162 12.2312 3.79388 11.559 2.99738 10.7274C2.20087 9.89582 1.63495 9.2167 1.29956 8.69003C0.964172 8.16336 0.663757 7.56046 0.398254 6.88134C0.132751 6.20222 0 5.53002 0 4.86475C0 3.5065 0.475098 2.35615 1.42535 1.41369C2.37555 0.47123 3.53534 0 4.90479 0C6.52576 0 7.86725 0.623688 8.92926 1.87106C9.99121 0.623688 11.3327 0 12.9537 0ZM9.01306 13.8043C10.3825 12.5846 11.3817 11.6768 12.0104 11.0808C12.6393 10.4849 13.331 9.77109 14.0856 8.93951C14.8401 8.10793 15.3641 7.38029 15.6576 6.7566C15.951 6.13292 16.0978 5.5023 16.0978 4.86475C16.0978 3.97773 15.7974 3.24317 15.1965 2.66106C14.5956 2.07896 13.848 1.7879 12.9537 1.7879C12.283 1.7879 11.6472 1.98193 11.0463 2.37001C10.4454 2.75808 10.0192 3.25703 9.76764 3.86685L8.09082 3.86685C7.86725 3.25703 7.45502 2.75808 6.85413 2.37001C6.25323 1.98193 5.60345 1.7879 4.90479 1.7879C4.0105 1.7879 3.26984 2.07896 2.68298 2.66106C2.09607 3.24317 1.80261 3.97773 1.80261 4.86475C1.80261 5.5023 1.94238 6.13292 2.2218 6.7566C2.50128 7.38029 3.02533 8.10793 3.79388 8.93951C4.56244 9.77109 5.26111 10.4849 5.88995 11.0808C6.51874 11.6768 7.50391 12.5846 8.8454 13.8043L8.92926 13.8874L9.01306 13.8043Z" fill="#9B9B9B" fill-opacity="1.000000" fill-rule="nonzero" />
          </svg>
          <span>Закладки</span>
        </li>
        <li>
          <svg width="18.000000" height="18.000000" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <path id="Union" d="M9 0C4.12109 0 0 4.1211 0 9C0 11.8701 1.4328 14.4702 3.59998 16.1316L3.59998 16.2L3.69177 16.2C5.19299 17.3205 7.03168 18 9 18C10.9683 18 12.807 17.3205 14.3082 16.2L14.4 16.2L14.4 16.1316C16.5672 14.4702 18 11.871 18 9C18 4.1211 13.8789 0 9 0ZM14.049 14.0769C13.7057 13.2596 13.129 12.5617 12.3909 12.0705C11.653 11.5794 10.7865 11.3168 9.90002 11.3157L8.09998 11.3157C7.2135 11.3168 6.34705 11.5794 5.60907 12.0705C4.87103 12.5617 4.29431 13.2596 3.95099 14.0769C2.63068 12.7638 1.79999 10.9584 1.79999 9C1.79999 5.0967 5.09668 1.8 9 1.8C12.9033 1.8 16.2 5.0967 16.2 9C16.2 10.9584 15.3693 12.7638 14.049 14.0769ZM5.40002 7.2C5.40002 5.148 6.948 3.60001 9 3.60001C11.052 3.60001 12.6 5.148 12.6 7.2C12.6 9.252 11.052 10.8 9 10.8C6.948 10.8 5.40002 9.252 5.40002 7.2ZM7.20001 7.2C7.20001 8.2602 7.93982 9 9 9C10.0602 9 10.8 8.2602 10.8 7.2C10.8 6.1398 10.0602 5.4 9 5.4C7.93982 5.4 7.20001 6.1398 7.20001 7.2ZM5.46661 15.2343C5.59924 14.6344 5.93237 14.0975 6.41113 13.7124C6.88983 13.3272 7.4856 13.1168 8.09998 13.1157L9.90002 13.1157C10.5144 13.1169 11.11 13.3275 11.5887 13.7126C12.0674 14.0977 12.4006 14.6344 12.5334 15.2343C11.4822 15.8436 10.2744 16.2 9 16.2C7.72559 16.2 6.51782 15.8436 5.46661 15.2343Z" clip-rule="evenodd" fill="#9B9B9B" fill-opacity="1.000000" fill-rule="evenodd" />
          </svg>
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  )
}

export default Header;
