import { ContextName } from "./Context";
import { useState, useEffect } from "react";

const CartContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);
  console.log(products);
  // add to cart
  function addtocart(singleproduuct) {
    console.log("cart");

    const exist = items.find((item) => item.id === singleproduuct.id);
    console.log(exist);

    if (exist) {
      setItems(
        items.map((item) =>
          item.id === singleproduuct.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item,
        ),
      );
    } else {
      setItems([...items, { ...singleproduuct, quantity: 1 }]);
    }
  }
  //   remove from cart
  function removeFromcart(renderedproduc) {
    const exist = items.find((item) => item.id === renderedproduc.id);
    if (exist.quantity === 1) {
      setItems(items.filter((item) => item.id !== renderedproduc.id));
    } else {
      setItems(
        items.map((item) =>
          item.id === renderedproduc.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item,
        ),
      );
    }
  }
  const totalPrise = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return (
    <ContextName.Provider
      value={{ products, items, addtocart, removeFromcart, totalPrise }}
    >
      {children}
    </ContextName.Provider>
  );
};

export default CartContext;
