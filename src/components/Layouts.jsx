import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Fotter from './Fotter'

const Layouts = () => {
  return (
<>
<Header/>
<Outlet/>
<Fotter/>
</>
    )
}

export default Layouts