import React from "react";
import { useContext } from "react";
import { ContextName } from "./Context";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { products, addtocart } = useContext(ContextName);
  const { id } = useParams();
  const product = products?.find((p) => p.id === Number(id));
  return (
    <>
      {product && (
        <div>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <button onClick={() => addtocart(product)}>Add to Cart</button>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
