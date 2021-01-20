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
import { inputs } from '../../usersTable/const'

const AddUser = ({ open, setOpen, setUsersData, usersData }) => {
  const classes = useStyles()
  const [newUser, setNewUser] = React.useState({
    name: '',
    img: '',
    id: '',
    phoneNumber: '',
    emailAddress: '',
    date: '',
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
      name: event.target.form[0].value,
      img: event.target.form[6].value,
      id: createID(),
      phoneNumber: event.target.form[4].value,
      emailAddress: event.target.form[2].value,
      date: currentDate(),
    })
  }

  const handleSubmit = (event) => {
    handleClickcClose()
    event.preventDefault()
    setUsersData([...usersData, newUser])
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
            <form action="" onSubmit={(event) => handleSubmit(event)}>
              {inputs.map((item) => {
                return (
                  <TextField
                    autoFocus
                    margin="dense"
                    id={item.id}
                    label={item.label}
                    type={item.type}
                    fullWidth
                    variant="outlined"
                    className={classes.textField}
                    onChange={(event) => saveData(event)}
                  />
                )
              })}
              <Button
                color="primary"
                variant="contained"
                className={classes.itemBtn}
                onClick={handleSubmit}
              >
                Add NEW USER
              </Button>
            </form>
          </DialogContent>
        </Grid>
        <Grid item md={6} style={{ widht: '480px', height: '100%' }}>
          <Box className={classes.itemBox}>
            <img src={logo} alt="" className={classes.logo} />
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default AddUser
