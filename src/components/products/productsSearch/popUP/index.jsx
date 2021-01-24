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
import { inputs } from './const'
import { setProducts } from '../../../../redux/actions/products'

const url = 'https://dasboard-deae2-default-rtdb.firebaseio.com'

const AddProduct = ({ open, setOpen, state, value }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [newProduct, setNewProduct] = React.useState({
    productLogo: '',
    productname: '',
    productDescription: '',
    updatedTime: '',
    downloads: 0,
  })


  const handleClickcClose = () => {
    setOpen(false)
  }

  const addProduct = async (newProduct) => {
    const product = newProduct
    try {
      const res = await axios.post(`${url}/products.json`, product)
      console.log(res.data)
      const payload = {
        ...product,
        id: res.data.name,
      }
      dispatch(setProducts([...state, payload]))
    } catch (e) {
      throw new Error(e.message)
    }
  }

  const saveData = (event) => {
    setNewProduct({
      productLogo: event.target.form[0].value,
      productname: event.target.form[2].value,
      productDescription: event.target.form[4].value,
      updatedTime: new Date().toUTCString(),
      downloads: value,
    })
    console.log(event.target.form[0].value)
  }

  const handleSubmit = (event) => {
    handleClickcClose()
    event.preventDefault()
    addProduct(newProduct)
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
            Create a new product
          </DialogTitle>
          <DialogContentText className={classes.dialogContentText}>
            Add main information about product
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
                Add NEW PRODUCT
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

export default AddProduct
