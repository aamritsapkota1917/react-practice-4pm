import React,{useState,useEffect} from 'react'
import axios from 'axios'
import{FaTrash,FaEdit} from 'react--icons/fa'
import { API,IMG_URL } from '../confing'
import { isAuthenticated } from '../auth/authIndex'
import { Link } from 'react-router-dom'
import 'react-tostify/dist/ReactToastify.css'


const Product = () => {
    const{token}=isAuthenticated()
    const[products,setProducts]=useState([])
    useEffect(()=>{
        axios.get(`${API}/productlist`)
        .then(res=>{
            setProducts(res.data)
        })
        .catch(err=>console.log(err))
    })


//delete product
const deleteProduct =id=>{
    const confirmed=window.confirm('Are You Sure Want TO Delete this product?')
    if(confirmed){
        axios.delete(`${API}/deleteProduct/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res=>{
            toast.sucess('product deleted successfully ✔')
            setProducts(products.filter(c=>c._id!==id))
        })
        .catch(err=>{
            toast.error('failed to delete product')
        })

    }
 }

  return (
    <>
    <ToastContainer theme='colored' position='top-center'/>
    <div className="container">
 <div className="row d-flex justify-content-center">
  <div className="col-md-10">
  <table classname='table table-bordered table-striped'>
<thead>
    <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Description</th>
        <th>Image</th>
        <th>Category</th>
        <th>Action</th>

    </tr>
</thead>

<tbody>
    {products && products.map((item,i)=>(
<tr key={i}>
<td>{item.product_name}</td>
<td>{item.product_price}</td>
<td>{item.countInStock}</td>
<td>{item.product_description}</td>
<td><img src={`${IMG_URL}/${item.product_image}`} alt={item.product_name} width={'100'} /></td>
<td>{item.category.category_name}</td>
<td>
    <Link to="#" className='btn btn-primary'><FaEdit/></Link>
    <button to="#" className='btn btn-danger' onClick={()=>deleteProduct(item._id)}><FaTrash/></button>
    
</td>
</tr>
    )) }
</tbody>
</table>

</div>
  </div>

  </div>
    
    </>
  )
}

export default ShowProduct