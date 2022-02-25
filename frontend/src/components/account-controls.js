import React, { useState, useRef, useEffect } from 'react'
import UserDropdown from './user-dropdown'

const AccountControls = ({ user }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false)
  const dropdownRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!displayDropdown) return
      if (!dropdownRef.current.contains(event.target)) {
        setDisplayDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [dropdownRef, displayDropdown])

  return (
    <div className='header-account-controls'>
      <span
        className={`transparent-white-link ${displayDropdown && 'active'}`}
        onClick={() => setDisplayDropdown(!displayDropdown)}
      >
        {user.username}
      </span>
      <UserDropdown user={user} displayDropdown={displayDropdown} ref={dropdownRef} />
    </div>
  )
}

export default AccountControls