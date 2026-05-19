import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedinUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div
      id="header"
      className="shadow-2xl flex justify-between shadow-orange-200 bg-orange-300 p-5"
    >
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL} />
      </div>
      <div className="flex mx-15">
        <ul className="flex items-center justify-evenly ">
          <li className="px-5">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-5 font-bold text-lg">
            <Link to="/cart">Cart ({cartItems.length} items) </Link>
          </li>
          <button
            className="bg-amber-600 m-4 px-4 border border-solid border- border-black  cursor-pointer rounded-sm"
            onClick={() => {
              setBtnName(btnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-5 font-bold">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
