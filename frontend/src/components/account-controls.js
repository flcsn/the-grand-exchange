import React, { useState } from 'react'
import UserDropdown from './user-dropdown'

const AccountControls = ({ user }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false)

  const handleClick = () => {
    setDisplayDropdown(!displayDropdown)
  }

  return (
    <div>
      <p onClick={handleClick}>{user.username}</p>
      {displayDropdown && <UserDropdown user={user} />}
    </div>
  )
}

export default AccountControls