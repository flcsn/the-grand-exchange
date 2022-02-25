import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../reducers/userReducer'

const UserDropdown = forwardRef(({ user, displayDropdown }, ref) => {
  const dispatch = useDispatch()

  const className = `user-dropdown-menu ${displayDropdown ? 'active' : ''}`

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(logout())
  }

  return (
    <div className={className} ref={ref}>
      <Link className='transparent-gray-link' to={`/user/${user.username}/products`}>My Products</Link>
      <Link className='transparent-gray-link' to='/main'>Account Settings</Link>
      <button className='logout-btn' onClick={handleLogout}>Log Out</button>
    </div>
  )
})

UserDropdown.displayName = 'UserDropdown'

export default UserDropdown