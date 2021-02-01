import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth()
  
  return (
    <Route
      {...rest}
      render={(props) =>
        currentUser ? <Component {...props} /> : <Redirect to="/signUp" />
      }
    />
  )
}

export default PrivateRoute
