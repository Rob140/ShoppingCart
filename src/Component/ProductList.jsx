import React from "react";
import { useContext, useState } from "react";
import { ContextName } from "./Context";
import productList from "./ProductList.module.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products, items, addtocart, removeFromcart, totalPrise } =
    useContext(ContextName);
  const [currentpage, setCurrentpage] = useState(1);
  // const [max, setMax] = useState();
  const itemperpage = 4;
  const total = products.length / itemperpage;
  // convert a number to array
  const convertNamber = Array.from({ length: total }, (_, i) => i + 1);
  console.log(convertNamber);

  const indexlastItem = currentpage * itemperpage;
  const indexfirstItem = indexlastItem - itemperpage;
  const curentItems = products.slice(indexfirstItem, indexlastItem);

  function paginate(convertedn) {
    setCurrentpage(convertedn);
  }
  return (
    <>
      <h2>Products</h2>
      <div className={productList.container}>
        {curentItems?.map((product) => (
          <div key={product.id} className={productList.product}>
            <img
              src={product.image}
              alt={product.title}
              className={productList.image}
            />
            <Link to={`/prod/${product.id}`}>
              <h3>{product.title}</h3>
            </Link>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addtocart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="btns">
        <button
          onClick={() => setCurrentpage((pre) => pre - 1)}
          disabled={currentpage === 1}
        >
          zrück
        </button>
        {/* paginatoon number */}
        {convertNamber.map((con) => (
          <button
            key={con}
            onClick={() => paginate(con)}
            disabled={currentpage === con}
          >
            {con}
          </button>
        ))}
        <button
          onClick={() => setCurrentpage((pre) => pre + 1)}
          disabled={currentpage === total}
        >
          weiter
        </button>
      </div>
    </>
  );
};

export default ProductList;
