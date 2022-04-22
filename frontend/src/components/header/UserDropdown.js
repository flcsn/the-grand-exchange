import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../reducers/userReducer'
import { AiFillPlusCircle } from 'react-icons/ai'

const UserDropdown = forwardRef(({ user, displayDropdown, setDisplayDropdown, setShowWalletForm }, ref) => {
  const dispatch = useDispatch()

  const className = `user-dropdown-menu ${displayDropdown ? 'active' : ''}`

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(logout())
  }

  const openWalletForm = () => {
    window.scroll(0,0)
    document.body.classList.toggle('no-scroll')
    setShowWalletForm(true)
    setDisplayDropdown(false)
  }

  return (
    <div className={className} ref={ref}>
      <p className='user-dropdown-menu-username'>
        {user.username}
      </p>
      <div className='user-dropdown-menu-funds'>
        <p>Funds: <strong>₱{user.funds.toLocaleString()}</strong></p>
        <div onClick={openWalletForm}>
          <AiFillPlusCircle />
        </div>
      </div>
      <Link className='transparent-gray-link' to={`/user/${user.username}/products`}>My Products</Link>
      <Link className='transparent-gray-link' to='/main'>Account Settings</Link>
      <button className='logout-btn' onClick={handleLogout}>Log Out</button>
    </div>
  )
})

UserDropdown.displayName = 'UserDropdown'

export default UserDropdown