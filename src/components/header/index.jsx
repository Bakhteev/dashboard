import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core'
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined'
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined'
import logo from '../../assets/logo.svg'
import useStyles from './style'


const Header = () => {
  const classes = useStyles()
  return (
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
          <IconButton aria-label="Exit" color="inherit">
            <ExitToAppOutlinedIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
