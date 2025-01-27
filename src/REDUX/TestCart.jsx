import React from "react";
import { useSelector } from "react-redux";
import TestItem from "./TestItem";
import Student from "./Student";

const TestCart = () => {
  const data = useSelector((store) => store.cart);
  return (
    <>
      <h2>The Total number of item in a cart is {data.cartCount} </h2>
      <TestItem />
      <Student />
    </>
  );
};

export default TestCart;
