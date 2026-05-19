import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const cartItems = useSelector((store) =>
    store.cart.items.map((item) => item.payload),
  );
  return (
    <div className="bg-orange-200 h-192 overflow-y-auto relative text-center">
      <div className=" w-6/12 mx-auto my-2 bg-orange-400 shadow-2xl p-4 rounded-sm border border-solid border-black">
        <div className="font-bold my-2 text-2xl"> Cart </div>
        {cartItems?.length === 0 ? (
          <h1>Cart is empty. Please add the items !!!</h1>
        ) : (
          <>
            <ItemList items={cartItems} action="Remove" />
            <button
              onClick={() => handleClearCart()}
              className="h-8 w-2/12 bg-black text-white mx-4 px-4 cursor-pointer rounded-sm"
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
