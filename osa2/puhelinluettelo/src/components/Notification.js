import React from 'react'

const Notification = ({ message }) => {
  if (message == null) {
    return null
  }

  const cname = message.error ? 'error' : 'notification'

  return (
    <div className={cname}>
      {message.message}
    </div>
  )
}

export default Notification
