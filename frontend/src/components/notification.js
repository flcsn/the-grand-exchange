import React from 'react'
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi'

const Notification = ({ notification }) => {
  if (notification === '')
    return null

  return (
    <div className='notification error'>
      {notification}
      <HiOutlineCheckCircle className='success-icon'/>
      <HiOutlineXCircle className='error-icon' />
    </div>
  )
}

export default Notification