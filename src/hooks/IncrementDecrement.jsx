import React,{useState} from 'react'

const IncrementDecrement = () => {
    const[num,setNum]=useState(1)
    // const incrementFunc = ()=>{
    //     setNum(num+2)
    // }

  return (

<>
<h2 className='text-sucess'>{num}</h2>
{/* <button className='btn btn-primary' onClick={incrementFunc}>Increment</button> */}
<button className='btn btn-primary' onClick={()=>setNum(num+2)}>Increment</button>
&nbsp;&nbsp;&nbsp;
{
    num>1 &&

<button className='btn btn-danger'onClick={()=>setNum(num-2)}>Decrement</button>
}

</> 
   )
}

export default IncrementDecrement