import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import logo from '../../assets/logo.svg'
import useStyles from './style'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { Alert, AlertTitle } from '@material-ui/lab'

const Header = () => {
  const classes = useStyles()

  const [error, setError] = useState('')
  const { logout } = useAuth()
  const history = useHistory()
  const handleLogOut = async () => {
    setError('')
    try {
      await logout()
      history.push('/login')
    } catch (error) {
      // new Error()
      setError(new Error('Failed to log out'))
    }
  }
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Box className={classes.box}>
            <img src={logo} alt="" className={classes.logoIcon} />
            <Typography variant="h4" className={classes.logoText}>
              Devias Kit
            </Typography>
          </Box>
          <Box className={classes.box}>
            <IconButton aria-label="Notification" color="inherit">
              <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton
              aria-label="Exit"
              color="inherit"
              onClick={handleLogOut}
            >
              <ExitToAppOutlinedIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {error &&
        setTimeout(() => {
          return (
            <Alert severity="error">
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )
        }, 500)}
    </>
  )
}

export default Header
