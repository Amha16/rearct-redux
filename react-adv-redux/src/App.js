import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { uiAction } from "./store/ui-Slice";
import { useDispatch } from "react-redux";
import Notification from "./components/UI/Notification";
import { Fragment } from "react";

let isInital = true;

function App() {
  const showCart = useSelector((state) => state.ui.cartIsShown);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiAction.showNotification({
          state: "pending",
          title: "Sending!",
          message: "sending cart data",
        })
      );
      const response = await fetch(
        "https://react-http-665e4-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data Failed!!");
      }

      dispatch(
        uiAction.showNotification({
          state: "success",
          title: "Success!",
          message: "sending cart data successful",
        })
      );
    };
    if(isInital){
      isInital=false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        uiAction.showNotification({
          state: "error",
          title: "Error!",
          message: "sending failed",
        })
      );
    });
  }, [cart, dispatch]);

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
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
