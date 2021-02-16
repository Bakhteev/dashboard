import React from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
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
import { setUsersDatabase } from '../../../../redux/actions/users'


const url = 'https://dasboard-deae2-default-rtdb.firebaseio.com'

const AddUser = ({ open, setOpen, state, notifications }) => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const addNote = async (newUser) => {
    const user = newUser
    try {
      const res = await axios.post(`${url}/users.json`, user)
      const payload = {
        ...user,
        id: res.data.name,
      }
      dispatch(setUsersDatabase([...state, payload]))
    } catch (e) {
      throw new Error(e.message)
    }
  }

  const [newUser, setNewUser] = React.useState({
    name: '',
    img: '',
    userId: '',
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
      userId: createID(),
      phoneNumber: event.target.form[4].value,
      emailAddress: event.target.form[2].value,
      date: currentDate(),
    })
  }

  const handleSubmit = (event) => {
    handleClickcClose()
    event.preventDefault()
    addNote(newUser)
  }

  return (
    <Dialog
      open={open}
      onClose={handleClickcClose}
      aria-labelledby="form-dialog-title"
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
            <form action="post">
              {inputs.map((item) => {
                return (
                  <TextField
                    key={item.id}
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
        <Grid item md={6} className={classes.popUpRight}>
          <Box className={classes.itemBox}>
            <img src={logo} alt="" className={classes.logo} />
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default AddUser
