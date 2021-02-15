import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Grid } from '@material-ui/core'
import Header from './components/header'
import SidebarNav from './components/sidebar'
import Users from './components/users'
import Products from './components/products'
import SignUp from './components/signUp'
import Login from './components/login'
import { useStyles } from './styles'
import PrivateRoute from './components/PrivateRoute'
import { useAuth } from './context/authContext'

function App() {
  const classes = useStyles()
  const { currentUser, } = useAuth()
  // setCurrentUser({...currentUser, name: '123', sirName:'159'})
  // console.log(currentUser.name)
  return (
    <>
      {currentUser ? (
        <div className="App">
          <Header />
          <Grid container>
            <Grid item>
              <SidebarNav />
            </Grid>
            <Grid item className={classes.rightgrid}>
              <Switch>
                <PrivateRoute exact path="/users" component={Users} />
                <PrivateRoute exact path="/products" component={Products} />
              </Switch>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div
          className="App"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Switch>
            <Route path="/signUp" render={() => <SignUp />} />
            <Route path="/login" render={() => <Login />} />
            <Redirect from="/" to="/signUp" />
          </Switch>
        </div>
      )}
    </>
  )
}

export default connect()(App)
