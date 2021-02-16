import React from 'react'
import { Dialog, DialogContent, Typography } from '@material-ui/core'
import headerImg from '../../../assets/header/popUpHeaderImg.svg'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch } from 'react-redux'
import { removeNotifications } from '../../../redux/actions/notification'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '75px 0 0',
  },
  scrollPaper: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
}))

const NotificationPopUp = ({
  open,
  setOpen,
  notifications,
  notificationsNumber,
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const clear = () => {
    setOpen(false)
    localStorage.removeItem('notificationItems')
    localStorage.removeItem('notificationNumber')
    dispatch(removeNotifications())
  }
  return (
    <Dialog
      aria-labelledby="form-dialog-title"
      open={open}
      onClose={clear}
      classes={{
        paper: classes.paper,
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
            {!notificationsNumber
              ? 'No notificatons'
              : `${notificationsNumber} new
            notifications`}
          </Typography>
        </div>
        {notifications ? (
          <ul>
            {notifications.map((notification) => {
              return (
                <li>
                  <Link
                    to="/products"
                    onClick={clear}
                    style={{
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '15px 0 15px 16px',
                      borderBottom: '1px solid #E4E7EB',
                    }}
                  >
                    <img
                      src={notification.productLogo}
                      alt=""
                      style={{ width: 36 }}
                    />
                    <div style={{ marginLeft: 8 }}>
                      <Typography
                        style={{
                          marginBottom: 4,
                          fontWeight: 'normal',
                          fontSize: 14,
                          lineHeight: 1.14,
                          color: '#3A3B3F',
                        }}
                      >
                        Product has been approved
                      </Typography>
                      <Typography
                        style={{
                          fontWeight: 'normal',
                          fontSize: 12,
                          lineHeight: 1.16,
                          color: '#9EA0A5',
                        }}
                      >
                        {new Date().getHours() - notification.updateHour} hours
                        ago
                      </Typography>
                    </div>
                    <span style={{ marginLeft: 52 }}>
                      <svg
                        width="6"
                        height="10"
                        viewBox="0 0 6 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.71 4.29L1.71 0.29C1.53 0.11 1.28 0 1 0C0.45 0 0 0.45 0 1C0 1.28 0.11 1.53 0.29 1.71L3.59 5L0.3 8.29C0.11 8.47 0 8.72 0 9C0 9.55 0.45 10 1 10C1.28 10 1.53 9.89 1.71 9.71L5.71 5.71C5.89 5.53 6 5.28 6 5C6 4.72 5.89 4.47 5.71 4.29Z"
                          fill="#9EA0A5"
                        />
                      </svg>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        ) : (
          ''
        )}
      </DialogContent>
    </Dialog>
  )
}

export default NotificationPopUp
