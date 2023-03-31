import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-Slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const cartQuantity = useSelector(state => state.cart.totalQuantity)
const dispatch = useDispatch();

const toggleHandler = () =>[
  dispatch(uiAction.toggle())
]
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
