import React from 'react'
import { isAuthenticated } from '../auth/authIndex'
const Profile = () => {
const {name,email}=isAuthenticated().user

  return (
    <>
    <h1>Name:{name}</h1>
    <h1>Email:{email}</h1>
    </>
  )
}

export default Profile