import { useSelector, useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData, fetchCartData } from "./store/product-action";

let initDisplay = true;

function App() {
  const cartSelector = useSelector((state) => state.page.isDisplayShoppingCart);
  const cart = useSelector((state) => state.product.item);
  const cartChange = useSelector((state) => state.product.change);
  const notification = useSelector((state) => state.page.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initDisplay) {
      initDisplay = false;
      return;
    }

    if (cartChange) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch, cartChange]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {cartSelector && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
