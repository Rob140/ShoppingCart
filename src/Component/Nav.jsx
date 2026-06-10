import { useContext } from "react";
import { ContextName } from "./Context";
import nav from "./Nav.module.css";
import { FaCartArrowDown } from "react-icons/fa";

const Nav = () => {
  console.log("nav");
  const { products, items, addtocart, removeFromcart, totalPrise } =
    useContext(ContextName);
  return (
    <nav className={nav.nav}>
      <h1 className={nav.title}>Shopping Cart</h1>
      <div className="icons">
        <FaCartArrowDown className={nav.cart} />
      </div>
    </nav>
  );
};

export default Nav;
