import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import logo from '../../assets/logo.svg'
import useStyles from './style'
import { useAuth } from '../../context/authContext'
import NotificationPopUp from './notificationPopUp'

const Header = () => {
  const classes = useStyles()
  const [error, setError] = useState('')
  const [open, setOpen] = React.useState(false)
  const { logout } = useAuth()
  const history = useHistory()

  const state = useSelector(({ notifications }) => {
    return {
      notifications: notifications.notifications,
      number: notifications.number,
    }
  })
  // const serialNotifications = JSON.stringify(state.notifications)

  // localStorage.setItem('notifications', serialNotifications)
  // localStorage.setItem('number', state.number)

  // const returtNotifications = JSON.parse(localStorage.getItem('notifications'))
  // const numberOfNotifications = localStorage.getItem('number')

  const handleLogOut = async () => {
    setError('')
    try {
      await logout()
      history.push('/login')
    } catch (error) {
      setError(new Error('Failed to log out'))
    }
  }

  const handleClickOpen = () => {
    setOpen(true)
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
            <IconButton
              aria-label="Notification"
              color="inherit"
              style={{ position: 'relative' }}
              onClick={handleClickOpen}
            >
              <NotificationsNoneOutlinedIcon />
              {state.number === 0 ? (
                ''
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 4,
                    padding: '4px 7px',
                    borderRadius: '50%',
                    background: '#EC4C47',
                    fontSize: 12,
                    boxSizing: 'border-box',
                  }}
                >
                  {state.number}
                </div>
              )}
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
      <NotificationPopUp open={open} setOpen={setOpen} />
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
