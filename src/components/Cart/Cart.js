import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.product.item);

  const cartItemList = cartItems.map((item) => (
    <CartItem key={item.id}
      item={{
        key:item.id,
        title: item.name,
        quantity: item.quantity,
        total: item.totolPrice ? item.totolPrice : 0, 
        price: item.price ? item.price : 0,
        id: item.id
      }}
    />
  ));

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItemList}
      </ul>
    </Card>
  );
};

export default Cart;
