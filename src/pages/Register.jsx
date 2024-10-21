import React,{useState} from "react";
//validation ko lagi npm install yup
//form banuna paryo vani npm install formik
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { signup } from "../auth/authIndex";





const Register = () => {
    const [error,setError]=useState('')
    const [sucess,setSucess]=useState(false)
    
    
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
            account created sucessfully 
        </div>
    )


  return (
    <Formik
    initialValues={{name:'', email:'',password:'',cpassword:''}}
    validationSchema={Yup.object({
        name:Yup.string()
        .required('name is mandatory')
        .max(20,'20 characters or less'),

        email:Yup.string()
        .required('email is mandatory')
        .email('Invalid email format'),

        password:Yup.string()
        .required('password is mandatory')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!_?])[A-Za-z\d@#$!_?]{8,50}$/, 'must contain one uppercase, one lowercase, one digits and one special character and must be minimum of 8 charcaters'),

        cpassword:Yup.string()
        .required('confirm password is mandatory')
        .oneOf([Yup.ref('password'),null],'password and confirm password doesnot match')

    })}


    onSubmit={(values,{setSubmitting,resetForm})=>{
        setSubmitting(true)
        signup(values)
        .then(data=>{
            if(data.error){
setError(data.error)
            }
            else{
                setSucess(true)
                resetForm()
                setError('')
            }
            setSubmitting(false)
        })
        .catch(err=>{
            console.error(err)
            setSubmitting(false)
        })
    }}
    >
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 shadow p-3">
<Form>

{showError()}
{showSucess()}
    <div className="mb-2">
        <label htmlFor="fname">Full Name</label>
        <Field type="text" name="name" id='fname' className="form-control"/>
        <ErrorMessage name='name'>
            {msg=> <div style={{color:'red'}}>{msg}</div>}
        </ErrorMessage>
    </div>
    
    <div className="mb-2">
        <label htmlFor="email">Email</label>
        <Field type="email" name="email" id='email' className="form-control"/>
        <ErrorMessage name='email'>
            {msg=> <div style={{color:'red'}}>{msg}</div>}
        </ErrorMessage>
    </div>
    <div className="mb-2">
        <label htmlFor="password">Password</label>
        <Field type="password" name="password" id='password' className="form-control"/>
        <ErrorMessage name='password'>
            {msg=> <div style={{color:'red'}}>{msg}</div>}
        </ErrorMessage>
    </div>
    <div className="mb-2">
        <label htmlFor="cpassword"> Confirm Password</label>
        <Field type="password" name="cpassword" id='cpassword' className="form-control"/>
        <ErrorMessage name='cpassword'>
            {msg=> <div style={{color:'red'}}>{msg}</div>}
        </ErrorMessage>
    </div>
<div className="mb-2">
    <button className='btn btn-primary'>Register</button>
</div>

</Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default Register;
