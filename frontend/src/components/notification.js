import React, { useState, useEffect } from 'react'
import { HiOutlineCheckCircle, HiOutlineXCircle } from 'react-icons/hi'

const Notification = ({ notification }) => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMessage(notification.message)
  }, [notification])

  if (message === '')
    return null

  const isSuccess = notification.type === 'success'

  const className = isSuccess
    ? 'notification success'
    : 'notification error'

  return (
    <div className={className}>
      <div>
        { isSuccess
          ? <HiOutlineCheckCircle className='success-icon'/>
          : <HiOutlineXCircle className='error-icon' />
        }
        {notification.message}
      </div>
      <button
        onClick={() => setMessage('')}
      >
        &times;
      </button>
    </div>
  )
}

export default Notification