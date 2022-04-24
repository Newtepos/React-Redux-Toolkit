import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { productAction } from '../../store/productSlice';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const addItemQuantityHandler = () => {
    const itemPayload = { id: id, name: title, price: price };
    dispatch(productAction.addItemToCart(itemPayload));
  }

  const removeItemQuantityHandler = () => {
    const itemPayload = { id: id, price: price };
    dispatch(productAction.removeItemFromCart(itemPayload));
  }

  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemQuantityHandler}>-</button>
          <button onClick={addItemQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
