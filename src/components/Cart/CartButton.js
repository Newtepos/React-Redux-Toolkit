import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { pageAction } from '../../store/pageSlice';

const CartButton = (props) => {

  const dispatch = useDispatch();
  const cartItemAmount = useSelector(state => state.product.totalQuantity);

  const toggleHandler = () => {
    dispatch(pageAction.toogle());
  }

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItemAmount}</span>
    </button>
  );
};

export default CartButton;
