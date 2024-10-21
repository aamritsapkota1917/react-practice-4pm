import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { API, IMG_URL } from '../confing';
const ProductDetails = () => {
    const params=useParams()
    const[product,setProduct]=useState({})
    useEffect(()=>{
        const id=params.product_id
        axios.get(`${API}/productdetails/${id}`)// import id from frontend
        .then(res=>setProduct(res.data))
        .catch(err=>console.log(err))
    },[])

    //handling of add to cart function
    const addToCart=()=>{
const cartItems=JSON.parse(localStorage.getItem('cartItems'))   || []
//local storage bata item fetch gareko fetching data from local storage 

//product ko data variable ma store gareko 
const productItems={
    id:product._id,
    title:product.product_name,
    price:product.product_price,
    image:product.product_image,
    category:product.category.category_name,
    rating:product.rating,
    stock:product.countInStock,
    quantity:1
    //local storage ma save garna yo sab data rakeko 

}


// check if the item is present the cart or not present xa vani already in cart dekauna paryoo
const existingItem=cartItems.find((item)=>item.id==product._id)
if (existingItem){
    toast.error('product already added in the cart')
    //productItem.title chai product ko name print garna 
}
else {
    cartItems.push(productItems)
    localStorage.setItem('cartItems' ,JSON.stringify(cartItems))
    toast.success(`${productItems.title} is added to cart`)
}

    }



  return (

    <>
    <ToastContainer theme='colored' position='top-center' />
    <div className="container">
        <div className="row d-flex justify-content-evenly shadow">
            <div className="col md-5">
                <img src={`${IMG_URL}/${product.product_image}`} alt={product.product_name} width={'500'} />
            </div>
            <div className="col md-6">
                <h2>{product.product_name}</h2>
                <h2>{product.product_price}</h2>
                {/* category milauna lai  */}
                <h3>Category:{product.category && product.category.category_name}</h3>  
                <p>{product.product_description}</p>
                <div className="my-2"></div>
               <button className='btn btn-warning' onClick={addToCart}>Add To Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProductDetails