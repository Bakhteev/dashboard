import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  DialogContent,
  Grid,
  DialogContentText,
  TextField,
  Box,
  Typography,
} from '@material-ui/core'
import headerImg from '../../../assets/header/popUpHeaderImg.svg'
import dollar from '../../../assets/header/dollar.svg'
import { TrainRounded } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    left: '100% !important',
    transform: 'translateX(-105%)',
    top: '75px !important',
    width: 'fit-content',
    height: 'fit-content',
  },
  container: {
    height: 'auto',
  },
  paper: {
    margin: 0,
  },
}))

const NotificationPopUp = ({ open, setOpen }) => {
  const handleClickClose = () => {
    setOpen(false)
  }
  const classes = useStyles()
  return (
    <Dialog
      style={{ inset: 1 }}
      classes={{ root: classes.root, container: classes.container, paper: classes.paper }}
      open={open}
      onClick={handleClickClose}
      invisible={true}
      hideBackdrop={true}
    >
      <DialogContent
        style={{
          width: 342,
          height: 395,
          overflowX: 'hidden',
          overflowY: 'scroll',
          background: '#fff',
          padding: '4px 6px 8px',
        }}
      >
        <div
          style={{
            background: `url(${headerImg}) right no-repeat, #F9FAFB`,
            padding: '28px 0 28px 20px',
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontSize: 14,
              lineHeight: 1.4,
              letterSpacing: -0.04375,
              color: '#3A3B3F',
            }}
          >
            User Notifications
          </Typography>
          <Typography
            component="span"
            style={{
              fontSize: 12,
              lineHeight: 1.1,
              color: '#9EA0A5',
            }}
          >
            14 new notifications
          </Typography>
        </div>
        <ul>
          <li style={{ display: 'flex', padding: '15px 0 15px 16px' }}>
            <img src={dollar} alt="" />
            <div>
              <Typography>New order has been received</Typography>
              <Typography>2 hours ago</Typography>
            </div>
          </li>
        </ul>
      </DialogContent>
    </Dialog>
  )
}

export default NotificationPopUp
