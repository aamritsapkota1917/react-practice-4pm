import React from "react";
// dispatch function call garna ko lagi 
import { useDispatch } from "react-redux";
const TestItem = () => {
const dispatch=useDispatch()
const increase=()=>(
    dispatch({type:'ADD_TO_CART'})
)
const decrease=()=>(
    dispatch({type:'REMOVE_FROM_CART'})
)
  return (
    <>
      <button className="btn btn-primary" onClick={increase}>+</button>
      &nbsp;&nbsp; &nbsp;&nbsp;
      <button className="btn btn-danger" onClick={decrease}>-</button>
    </>
  );
};

export default TestItem;
