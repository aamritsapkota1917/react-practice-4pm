import React, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../confing";
import { isAuthenticated } from "../auth/authIndex";

const AddProduct = () => {
  const { token } = isAuthenticated();
  const [categories, setCategory] = useState([]);

  const[handleChange]=name=>event=>{
    setProductData({...productData,error:false,[name]:event.target.value})
  }

  const[handleImageChange]=event=>{
    setProductData({...productData,product_image:event.target.files[0]})

  }

  const [productData, setProductData] = useState({
    product_name: "",
    product_price: "",
    countInStock: "",
    product_description: "",
    product_image: "",
    category: "",
  });
  const {
    product_name,product_price,countInStock,product_description,category,product_image
} = productData;
const [error, setError] = useState("");
const [sucess, setSucess] = useState(false);

useEffect(() => {
    axios
      .get(`${API}/allcategory`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  const [handleSubmit]=async event=>{
    event.preventDefault()
    try{
        const formData=new FormData();
        formData.append('product_name',productData.product_name)
        formData.append('product_price',productData.product_price)
        formData.append('CountInStock',productData.countInStock)
        formData.append('product_description',productData.product_description)
        formData.append('product_image',productData.product_image)
        formData.append('category',productData.category)


        const config={
            headers:{
                'Content-Type':'multipart/form-data',
                Authorization:`Barer${token}`

            }
        }
        const responses=await axios.post(`${API}/postproduct`,formData,config)
        setSucess(true)
        setError('')
        setProductData({
            product_name: "",
            product_price: "",
            countInStock: "",
            product_description: "",
            product_image: "",
            category: ""
        })

    }
    catch(err){
        setError(err.responses.data.error)
        setSucess(false)
    }
  }

 //to show error message 
    
const showError=()=>(
    //error lekda { } => yo bracket use hunna kaile ni 
    error && <div className="alert alert danger"> 
        {error}
    </div>
  )
  
  //to show sucess message
  
  const showSucess=()=>(
    sucess && <div className="alert alert-sucess">
     Product Added Sucessfully ✔
    </div>
  )

  

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-">
            <form className="shadow p-3">
              <h3 className="text-center text-muted ">Add Product Form</h3>
              {showError()}
              {showSucess()}
              <div className="mb-2">
                <label htmlFor="pname">Product Name</label>
                <input
                  type="text"
                  name="pname"
                  id="pname"
                  className="form-control"
                  onChange={handleChange('product_name')}
                  value={product_name}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="price">Product Price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="form-control"
                  onChange={handleChange('product_price')}
                  value={product_price}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="stock">Stuck Quantiity</label>
                <input
                  type="number"
                  name="stock"
                  id="stock"
                  className="form-control"
                  onChange={handleChange('countInStock')}
                  value={countInStock}
                />
              </div>
              
              <div className="mb-2">

<label htmlFor="description" >Product Description</label>
    <textarea name="description" id="description" cols="30" rows="10" onChange={handleChange('product_description')} value={product_description} className="form-control"></textarea>


</div>

<div className="mb-2">
                <label htmlFor="image">Product Image</label>
                <input
                  type="image"
                  name="image"
                  id="image"
                  className="form-control"
                  onChange={handleImageChange}
                  
                />
              </div>

              <div className="mb-2">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" className="form-control" onChange={handleChange('category')}>
                    <option>Choose Category</option>
{categories && categories.map((c,i)=>(
<option value={c._id} key={i}>{c.category_name}</option>
))}
                </select>
                </div>

                <div className="mb-2">
                    <button className="btn btn-primary" onClick={handleSubmit}>Add</button>
                </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
