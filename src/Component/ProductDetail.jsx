import React from "react";
import { useContext } from "react";
import { ContextName } from "./Context";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { products } = useContext(ContextName);
  const { id } = useParams();
  const product = products?.find((p) => p.id === Number(id));
  return <></>;
};

export default ProductDetail;
