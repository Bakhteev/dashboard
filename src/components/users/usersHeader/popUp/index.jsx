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
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import logo from '../../../../assets/logo.svg'
import useStyles from './style'
import {rows} from '../../usersTable/const'

const AddUser = ({ open, setOpen}) => {
  const classes = useStyles()
  const [newUser, setNewUser] = React.useState({
    name: '',
    img: '',
    id: '',
    phoneNumber: '',
    emailAddress: '',
    data: '',
  })
  const createID = () => {
    return 'DEV' + Math.random().toString(10).substr(2, 9)
  }
  const currentDate = () => {
    const newDate = new Date()
    const date = newDate.getDate()
    const month = newDate.getMonth() + 1
    const year = newDate.getFullYear()
    const separator = '/'
    const result = `${date}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${year}`
    return result
  }
 const handleClickcClose = () => {
    setOpen(false)
  }
  const saveData = (event) => {
    setNewUser({
      name: event.target.value,
      img: event.target.value,
      id: createID(),
      phoneNumber: event.target.value,
      emailAddress: event.target.value,
      data: currentDate(),
    })
    console.log(event.target)
  }

  const handleSubmit = (event) => {
    handleClickcClose()
    event.preventDefault()
    rows.push(newUser)
  }

 
  return (
    <Dialog
      open={open}
      onClose={handleClickcClose}
      aria-labelledBy="form-dialog-title"
      classes={{ paper: classes.paper, paperWidthSm: classes.paper }}
    >
      <Grid container>
        <Grid item md={6} className={classes.item}>
          <DialogActions
            classes={{
              root: classes.dialogActions,
            }}
          >
            <Button startIcon={<ArrowBackIcon />} onClick={handleClickcClose}>
              Go back
            </Button>
          </DialogActions>
          <DialogTitle
            id="form-dialog-title"
            classes={{ root: classes.dialogTitle }}
          >
            Create a new user
          </DialogTitle>
          <DialogContentText className={classes.dialogContentText}>
            Add main information about user
          </DialogContentText>
          <DialogContent
            classes={{
              root: classes.itemDialogContent,
            }}
          >
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Full Name"
                type="text"
                fullWidth
                variant="outlined"
                className={classes.textField}
                onChange={(event) => saveData(event)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                className={classes.textField}
                onChange={(event) => saveData(event)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="phone"
                label="Phone"
                type="text"
                fullWidth
                variant="outlined"
                className={classes.textField}
                onChange={(event) => saveData(event)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="img"
                label="Image url"
                type="text"
                fullWidth
                variant="outlined"
                className={classes.textField}
                onChange={(event) => saveData(event)}
              />
              <Button
                color="primary"
                variant="contained"
                className={classes.itemBtn}
                onClick={handleSubmit}
              >
                Add NEW USER
              </Button>
          </DialogContent>
        </Grid>
        <Grid item md={6} style={{ widht: '480px', height: '100%' }}>
          <Box className={classes.itemBox}>
            <img src={logo} alt="" className={classes.logo}/>
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default AddUser
