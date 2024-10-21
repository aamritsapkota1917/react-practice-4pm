import React, { useState, useEffect, Fragment } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FaTrash} from 'react-icons/fa'
import { IMG_URL } from "../confing";
const Cart = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cartItems"))
    setProduct(cartData)
  }, []);

  //remove item cart function auta parameter xa vani paranthesis chainna 
  const removeCartHandler=id=>{
     const cartItems=JSON.parse(localStorage.getItem("cartItems"))
     //remove from cart using filter 
     const filterCart=cartItems.filter(item=>item.id!==id) 
     //update product after filter 
     setProduct(filterCart)
     //update the local storage data
     localStorage.setItem('cartItems', JSON.stringify(filterCart))
     toast.success('sucessfully  removed from the cart ')
     }
     //increase cart quantity 
     const increaseQty=id=>{
      const updateProducts=products.map(item=>{
        if(item.id==id && item.quantity<item.stock){
          //(...) vaneko rest operator ho 
          return{...item,quantity:item.quantity+1}

        }
        return item 
      })
      setProduct(updateProducts)
      localStorage.setItem('cartItems',JSON.stringify(updateProducts))
    }

    const decreaseQty=id=>{
     const updateProducts=products.map(item=>{
       if(item.id==id && item.quantity>1){
         //(...) vaneko rest operator ho 
         return{...item,quantity:item.quantity-1}

       }
       return item 
     })
      setProduct(updateProducts)
      localStorage.setItem('cartItems',JSON.stringify(updateProducts))
        
          
             }

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="container">
        <div className="row d-flex justify-content-evenly my-4">
          {products.length == 0 ? (
            <h2 className="my-5 text-danger text-center">your cart is empty</h2>
          ) : (
            // : le if bala siddio else bala part start
            <>
              <h2 className="text-center">your cart Items</h2>
              <div className="col-md-8 shadow">
                {products.map((item, i) => (
                  <Fragment key={i}>
                    <hr />
                    <div className="row d-flex align-item-center">
                      <div className="col-2">
                        <img src={`${IMG_URL}/${item.image}`} alt={item.title} width={"100"} />
                      </div>
                      <div className="col-3">
                        <span>
                          <strong>{item.title}</strong>
                        </span>
                      </div>
                      <div className="col-3 text-warning">
                        Rs{item.price}</div>
                      <div className="col-3">
                        <div className="d-flex">
                          <button className='btn btn-danger' onClick={()=>decreaseQty(item.id)} readOnly>-</button>
                          &nbsp;
                          <input type="number" className='form-control border-0 text-center' value={item.quantity} readOnly />
                          &nbsp;
                          <button className='btn btn-primary' onClick={()=>increaseQty(item.id)}>+</button>
                        </div>
                      </div>
                      <div className="col-1">
                        <button className="btn btn-danger"
                         onClick={()=>removeCartHandler(item.id)}>
                          <FaTrash/>
                        </button>
                      </div>
                    </div>
                    <hr/>
                  </Fragment>
                ))}
              </div>
              <div className="col-md-3">
                <div className="shadow p-2">
                    <h5>Cart Summary</h5>
                    <hr/>
                    <span><strong>Units:</strong> {products.reduce((total,item)=>total+Number(item.quantity),0)}Units</span>
                    <br/>
                    <span><strong>Total:</strong>
                    Rs{products.reduce((total,item)=>total+(Number(item.quantity)*Number(item.price))
                    ,0)}
                    </span>
                    <hr/>
                    <button className='btn btn-warning'>Check Out</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
