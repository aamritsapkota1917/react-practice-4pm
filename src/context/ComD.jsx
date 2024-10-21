import React,{useContext} from 'react'
import { GlobalContext } from './GlobalContext'

const ComD = () => {
  const js=useContext(GlobalContext)
  return (
    <>
    <h2>The javascirpt libary we are learning is React Js</h2>
    <h1>the name odf the student is {js.name}</h1>
    <h2>age:{js.age}</h2>
    </>
  )
}

export default ComD