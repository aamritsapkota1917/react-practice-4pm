import React from 'react'
import './first.css'
import TestNav from './TestNav'

const First = () => {
  return (
   
    <>
    <TestNav/>
    <h1 className='title'>This is a First component</h1>
    <h1 className='text-warning fs-2 bg-danger p-2'>Amrit Sapkota</h1>
    <h2>we are using functional component</h2>
    </>

  )
}

export default First