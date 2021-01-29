import React, { useEffect, useState, createContext } from 'react'
import app from '../firebase'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    app.auth().onAuthStateChanged(setCurrentUser)
  }, [])
  return (
    <div>
      <AuthContext.Provider
        value={{
          currentUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
