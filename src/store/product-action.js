import { pageAction } from "./pageSlice";
import { productAction } from "./productSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    //Start Fetching Data
    dispatch(
      pageAction.setNotification({
        status: "Fetching",
        title: "Fetching...",
        message: "Data is fetching",
      })
    );

    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-efc44-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Fetching data Error");
      }
      const data = response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(productAction.replaceCartItem(cartData));

      dispatch(
        pageAction.setNotification({
          status: "success",
          title: "Success",
          message: "Fetching Successfull",
        })
      );

      //Reset Notification
      setTimeout(() => {
        dispatch(pageAction.resetNotification());
      }, 1000);
      
    } catch (error) {
      dispatch(
        pageAction.setNotification({
          status: "error",
          title: "Error",
          message: "Fetching Data Error",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    //Start Sending Data
    dispatch(
      pageAction.setNotification({
        status: "Sending",
        title: "Sending...",
        message: "Data is sending...",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-efc44-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
        { method: "put", body: JSON.stringify(cart) }
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data Failed");
      }
    };

    try {
      await sendRequest();

      //Sending Data Complete
      dispatch(
        pageAction.setNotification({
          status: "success",
          title: "success",
          message: "Data is send successfully",
        })
      );

      //Reset Notification
      setTimeout(() => {
        dispatch(pageAction.resetNotification());
      }, 1000);
    } catch (error) {
      dispatch(
        pageAction.setNotification({
          status: "error",
          title: "Error",
          message: "Sending Data Failed",
        })
      );
    }
  };
};
