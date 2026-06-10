import { useContext, useState } from "react";
import { ContextName } from "./Context";
import nav from "./Nav.module.css";
import { FaCartArrowDown } from "react-icons/fa";

const Nav = () => {
  const [togleCart, setToggleCart] = useState(false);
  console.log("nav");
  const { products, items, addtocart, removeFromcart, totalPrise } =
    useContext(ContextName);
  return (
    <>
      <nav className={nav.nav}>
        <h1 className={nav.title}>Shopping Cart</h1>
        <div className={nav.icons}>
          <div className={nav.relativ}>
            <FaCartArrowDown
              className={nav.cart}
              onClick={() => setToggleCart(!togleCart)}
            />
            <span className={nav.cartCount}>{items.length}</span>
            <div className={nav.cartContainer}>
              {/* cart */}
              {items.length === 0 ? null : (
                // <p>the corb is empty</p>
                <div className={nav.cartItems}>
                  <button>{totalPrise}</button>

                  {items.map((item) => (
                    <li key={item.id} className={nav.cartItem}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className={nav.cartItemImage}
                      />
                      <h3>{item.title}</h3>
                      <p>${item.price.toFixed(2)}</p>
                      <div className={nav.controls}>
                        <button onClick={() => removeFromcart(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => addtocart(item)}>+</button>
                      </div>
                    </li>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
