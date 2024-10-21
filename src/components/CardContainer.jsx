import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import { ColorRing } from  'react-loader-spinner'
import { API } from '../confing'

const CardContainer = () => {
const[products,setProducts]=useState([])
const[loading,setLoading]=useState(true)
useEffect(()=>{
    const fetchProduct=async()=>{
        try{
            const response=await axios.get(`${API}/allproduct`)
            setProducts(response.data)
            setLoading(false)
        }
        catch(err){
            console.log(err)
        }
    }
    setTimeout(()=>{
        fetchProduct()
    },2000)
})
return <>
<div className="conatiner-fluid">
<div className="row row-cols-1 row-cols-md-4 g-4">
{loading?(
<div style={{heigth:'50vh'}} className="d-flex jusify-center align-items-center">
<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="blocks-loading"
  wrapperStyle={{}}
  wrapperClass="blocks-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
/>
</div>
):
products.slice(0,8).map((product,i)=>{
return <Card key={i} item={product}/>
})
}

</div>
</div>
</>
}

export default CardContainer