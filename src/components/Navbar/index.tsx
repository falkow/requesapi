import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BehindGreenDoor } from '../../assets/BehindGreenDoor';
import ShoppingCart from '../../assets/ShoppingCart';
import style from './Navbar.module.scss';
import { CartCtx } from '../../context/Cart/CartContext';

const { header, headerLink, headerWrapper, headerLinks } = style;

const Navbar = () => {
  const { cartState } = useContext(CartCtx);

  const { items } = cartState;
  const itemsInCart = items.length;

  return (
    <header className={header}>
      <div className={headerWrapper}>
        <Link to='/'>
          <BehindGreenDoor />
        </Link>
        <nav className={headerLinks}>
          <Link to='/' className={headerLink}>
            Home
          </Link>
          <Link to='/shop' className={headerLink}>
            Shop
          </Link>
          <Link to='/cart' className={headerLink}>
            <ShoppingCart />
            <p>{itemsInCart ? `(${itemsInCart})` : ''}</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
