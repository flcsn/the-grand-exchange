import React, { useState, useRef, useEffect } from 'react'
import { HiUserCircle } from 'react-icons/hi'

import UserDropdown from './UserDropdown'
import WalletForm from './WalletForm'

const AccountControls = ({ user }) => {
  const [displayDropdown, setDisplayDropdown] = useState(false)
  const [showWalletForm, setShowWalletForm] = useState(false)
  const dropdownRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!displayDropdown || dropdownRef.current === null) return
      if (!dropdownRef.current.parentNode.contains(event.target)) {
        setDisplayDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
  }, [dropdownRef, displayDropdown])

  return (
    <div className='header-account-controls'>
      <div className='user-icon-container' onClick={() => setDisplayDropdown(!displayDropdown)}>
        <HiUserCircle className={`user-icon ${displayDropdown && 'active'}`} />
      </div>
      <UserDropdown
        user={user}
        displayDropdown={displayDropdown}
        setDisplayDropdown={setDisplayDropdown}
        setShowWalletForm={setShowWalletForm}
        ref={dropdownRef}
      />
      { showWalletForm && <WalletForm closeForm={() => setShowWalletForm(false)} />}
    </div>
  )
}

export default AccountControls