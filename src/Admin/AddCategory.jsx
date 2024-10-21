import React,{useState} from 'react'
import { isAuthenticated } from '../auth/authIndex'
import { API } from '../confing'

const AddCategory = () => {
    const[category_name,setCategory]=useState('')
    const[error,setError]=useState('')
    const[sucess,setSucess]=useState(false)

    //destructure token 
const{token}=isAuthenticated()

const handleSubmit=e=>{
    e.preventDefault()
    setError('')
    setSucess(false)

    //request to post category
    fetch(`${API}/postcategory`,{
        method:'POST',
        headers:{
            accept:"application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer${token}`
        },
        body: JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.error){
            setError()
            setSucess()
        }
        else{
            setError('')
            setSucess(true)
            setCategory('')

        }
    })
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
   Category Added Sucessfully ✔
  </div>
)

  return (
    <>
    
<div className="container">
    <div className="row d-flex justify-content-center">
        <div className="col-md-">
            <form className="shadow p-3">
                <h3 className='text-center'>Add Category form</h3>
                {showError()}
                {showSucess()}
                <div className="mb-2">
                    <label htmlFor="category">Category Name</label>
                    <input type="text" name="category" id="category" className='form-control' onChange={e=>setCategory(e.target.value)} value={category_name}/>

                </div>
                <div className="mb-2">
                    <button className='btn btn-primary' onClick={handleSubmit}>Add</button>

                </div>
            </form>
        </div>
    </div>
</div>

    </>
  )
}

export default AddCategory