import React from 'react'
import { Dialog, DialogContent, Typography } from '@material-ui/core'
import headerImg from '../../../assets/header/popUpHeaderImg.svg'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { removeNotifications } from '../../../redux/actions/notification'

const useStyles = makeStyles((theme) => ({
  root: {
    top: '75px !important',
  },
  paper: {
    margin: 0,
  },
  scrollPaper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  container: {},
}))

const NotificationPopUp = ({ open, setOpen, notifications }) => {
  console.log(notifications)
  const handleClickClose = () => {
    setOpen(false)
  }
  const classes = useStyles()
  const dispatch = useDispatch()

  const clear = () => {
    localStorage.removeItem('notificationItems')
    localStorage.removeItem('notificationNumber')
    dispatch(removeNotifications())
  }
  return (
    <Dialog
      open={open}
      onClick={handleClickClose}
      onClose={clear}
      classes={{
        root: classes.root,
        paper: classes.paper,
        container: classes.container,
        scrollPaper: classes.scrollPaper,
      }}
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
          {notifications.map((notification) => {
            return (
              <li style={{ display: 'flex', padding: '15px 0 15px 16px' }}>
                {notification.productname ? (
                  <>
                    <img
                      src={notification.productLogo}
                      alt=""
                      style={{ width: 36, height: 36 }}
                    />
                    <div>
                      <Typography>Product has been approved</Typography>
                      <Typography>
                        {new Date().getHours() - notification.updateHour} hours
                        ago
                      </Typography>
                    </div>
                  </>
                ) : (
                  ''
                )}
              </li>
            )
          })}
        </ul>
      </DialogContent>
    </Dialog>
  )
}

export default NotificationPopUp
