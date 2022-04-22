import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/sample-logo.PNG'
import { useSelector } from 'react-redux'
import AccountControls from './AccountControls'
import { HiUserAdd } from 'react-icons/hi'
import SearchBox from './SearchBox'

const Header = () => {
  const user = useSelector(state => state.user)

  return (
    <div className='header'>
      <Link to='/main'>
        <img src={logo} alt='sample logo'/>
      </Link>
      <SearchBox />
      { user
        ? <AccountControls user={user} />
        : <Link to='/login'>
          <div className='user-icon-container'>
            <HiUserAdd className='login-icon'/>
          </div>
        </Link>}
    </div>
  )
}

export default Header