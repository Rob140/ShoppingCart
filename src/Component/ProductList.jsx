import React from "react";
import { useContext } from "react";
import { ContextName } from "./Context";
import productList from "./ProductList.module.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, items, addtocart, removeFromcart, totalPrise } =
    useContext(ContextName);
  return (
    <>
      <div className={productList.container}>
        <h2>Products</h2>
        <Link to="/product/:id">
          {products?.map((product) => (
            <div key={product.id} className={productList.product}>
              <img
                src={product.image}
                alt={product.title}
                className={productList.image}
              />
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button onClick={() => addtocart(product)}>Add to Cart</button>
            </div>
          ))}
        </Link>
      </div>
    </>
  );
};

export default ProductList;
