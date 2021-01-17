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
  makeStyles,
} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import logo from '../../../../assets/logo.svg'
import popUpBg from '../../../../assets/navSidebar/popupbg.png'

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'block',
    widht: '960px',
    height: '640px',
  },
  paper: {
    margin: 0,
    maxWidth: 960,
  },
  item: {
    padding: theme.spacing(6.875, 8, 8),
  },
  itemdialogContent:{
    alignItems: 'center',
    padding: 0,
    maxWidth: 480,
  },
  itemBtn:{
    width: '100%',
  }
}))
const AddUser = ({ open }) => {
  const classes = useStyle()
  return (
    <Dialog
      open={open}
      aria-labelledBy="form-dialog-title"
      classes={{ paper: classes.paper, paperWidthSm: classes.paper }}
    >
      <Grid container>
        <Grid item md={6} className={classes.item}>
          <DialogActions>
            <Button startIcon={<ArrowBackIcon />}>Go back</Button>
          </DialogActions>
          <DialogTitle id="form-dialog-title">Create a new user</DialogTitle>
          <DialogContentText>Add main information about user</DialogContentText>
          <DialogContent
            classes={{
              root: classes.itemdialogContent,
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
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="phone"
              label="Phone"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              autoFocus
              margin="dense"
              id="img"
              label="Image url"
              type="text"
              fullWidth
              variant="outlined"
            />
            <Button
              color="primary"
              variant="contained"
              className={classes.itemBtn}
            >
              Add NEW USER
            </Button>
          </DialogContent>
        </Grid>
        <Grid item md={6} style={{ widht: '480px', height: '100%' }}>
          <Box
            style={{
              background: `url(${popUpBg}) no-repeat center`,
              backgroundSize: 'cover',
              height: '640px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={logo} alt="" style={{ width: 252 }} />
          </Box>
        </Grid>
      </Grid>
    </Dialog>
  )
}

export default AddUser
