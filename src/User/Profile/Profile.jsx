import React, { useContext } from 'react'
import "./Profile.css"
import AppContext from '../../Context/AppContext'
import OrderConfirmation from '../../Components/OrderConfirmation/OrderConfirmation'

const Profile = () => {
    const {user} = useContext(AppContext)
  return (
   <div className="">
     <div className="profile my-5 mt-5">
      <h1>Welcome, {user?.name}</h1>
      <h3>{user?.email} </h3>
    </div>
    <OrderConfirmation/>
   </div>
  )
}

export default Profile