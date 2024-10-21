import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {FaTrash} from 'react-icons/fa'
import {API} from '../confing'
import {isAuthenticated} from '../auth/authIndex'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Category=()=>{
    const {token}=isAuthenticated()
const [categories, setCategory]=useState([])

useEffect(()=>{
    axios.get(`${API}/allcategory`)
    .then(res=>{
        setCategory(res.data)
    })
    .catch(err=>console.log(err))
 },[])

 //delete category
 const deleteCategory =id=>{
    const confirmed=window.confirm('Are You Sure Want TO Delete this category?')
    if(confirmed){
        axios.delete(`${API}/deleteCategory/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res=>{
            toast.sucess('category deleted successfully')
            setCategory(categories.filter(c=>c._id!==id))
        })
        .catch(err=>{
            toast.error('failed delete category')
        })

    }
 }

    return(
        <>
<ToastContainer theme='colored' position='top-center'/>
 <div className="row d-flex justify-content-center">
  <div className="col-md-5">
<table classname='table table-bordered table-striped'>
<thead>
    <tr>
        <th>Category Name</th>
        <th>Action</th>

    </tr>
</thead>
<tbody>
    {categories && categories.map((category,i)=>{
        <tr key={i}>
            <td>{category.category_name}</td>
            <td><button className='btn btn-danger' onClick={()=>deleteCategory(category._id)}><FaTrash/></button></td>
        </tr>
    })}
</tbody>
</table>
</div>
</div>
        </>
    )
        
}
export default Category