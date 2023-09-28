import React, { useContext } from 'react'
import UserContext from './context/UserContext'

function Profile() {
 const { currentUser, setCurrentUser } = useContext(UserContext)

  return (
    <div>
        <p>logged in as {currentUser.username}</p>
    </div>
  )
}

export default Profile