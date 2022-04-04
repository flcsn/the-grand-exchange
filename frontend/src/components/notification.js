import React from 'react'
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi'

const Notification = ({ notification }) => {
  if (notification.message === '')
    return null

  const isSuccess = notification.type === 'success'

  const className = isSuccess
    ? 'notification success'
    : 'notification error'

  return (
    <div className={className}>
      {notification.message}
      { isSuccess
        ? <HiOutlineCheckCircle className='success-icon'/>
        : <HiOutlineXCircle className='error-icon' />
      }
    </div>
  )
}

export default Notification