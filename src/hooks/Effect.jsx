import React,{useState,useEffect} from 'react'

const Effect = () => {
    const[data,setData]=useState(1)
    const[num,setNum]=useState(1)

    useEffect(()=>{
        alert('thisi is a page effect alert msg ')
    },[])
    // [] => yo empty rakni vaneko eak choti matra page load huda dekini ani tes vitra kai ma useEffect halna paryo vanei [data] jsari halni
  return (
    <>
    <h2 className='text-danger'>{data}</h2>
<button className='btn btn-warning' onClick={()=>setData(data+2)}>Add</button>
<h2 className='text-info'>{num}</h2>
<button className='btn btn-secondary' onClick={()=>setNum(num+5)}>Add</button>
    
    </>
  )
}

export default Effect