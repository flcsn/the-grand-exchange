import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../reducers/userReducer'

const UserDropdown = ({ user }) => {
  const dispatch = useDispatch()

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(logout())
  }

  return (
    <div>
      <Link to={`/user/${user.username}/products`}>My Products</Link>
      <Link to='/main'>Account Settings</Link>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default UserDropdown