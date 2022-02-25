import React, { useState } from 'react'
import UserDropdown from './user-dropdown'

const AccountControls = ({ user }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false)

  return (
    <div className='header-account-controls'>
      <span
        className={`transparent-white-link ${displayDropdown && 'active'}`}
        onClick={() => setDisplayDropdown(!displayDropdown)}
      >
        {user.username}
      </span>
      <UserDropdown user={user} displayDropdown={displayDropdown} />
    </div>
  )
}

export default AccountControls