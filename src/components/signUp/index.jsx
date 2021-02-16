import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import {
  Button,
  Typography,
  TextField,
  Grid,
  Checkbox,
  Box,
  Avatar,
} from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'
import { useAuth } from '../../context/authContext'
import avatar from '../../assets/signUp/girl.svg'
import { setRegisteredUser } from '../../redux/actions/registratedUsers'
import { inputs } from './const'
import useStyles from './style'

const url = 'https://dasboard-deae2-default-rtdb.firebaseio.com'


const SignUp = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    photo: '',
    position: '',
    email: '',
  })
  const [registration, setRegistration] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const saveUser = (event) => {
    setUser({
      name: event.target.form[0].value,
      lastName: event.target.form[2].value,
      photo: '',
      position: event.target.form[4].value,
      email: event.target.form[6].value,
    })
  }
  const saveRegistrationData = (event) => {
    setRegistration({
      email: event.target.form[6].value,
      password: event.target.form[8].value,
      passwordConfirm: event.target.form[10].value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (registration.password !== registration.passwordConfirm) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signup(registration.email, registration.password)
      console.log(user)
      const res = await axios.post(`${url}/registratedUser.json`, user)
      const payload = [
        {
          ...user,
          id: res.data.name,
        },
      ]
      localStorage.setItem('payload', JSON.stringify(payload))
      const localStoragePayloadGet = localStorage.getItem('payload')
      const localStoragePayload = JSON.parse(localStoragePayloadGet)

      dispatch(setRegisteredUser(localStoragePayload))
      history.push('/users')
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false)
  }

  return (
    <>
      {error && (
        <Alert severity="error">
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <Grid container className={classes.container}>
        <Grid item xs={6} className={classes.itemLeft}>
          <div className={classes.header}>
            <Link to="/login" className={classes.link}>
              Have an account?
              <Typography
                component="span"
                style={{ textDecoration: 'underline' }}
              >
                {' '}
                Log in
              </Typography>
            </Link>
          </div>
          <div>
            <Typography variant="h2" className={classes.title}>
              Sign up to Brainalityca
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              Sign up on the internal platform
            </Typography>
          </div>
          <form onSubmit={handleSubmit}>
            {inputs.map((input) => {
              return (
                <TextField
                  key={input.id}
                  margin="dense"
                  id={input.id}
                  label={input.label}
                  type={input.type}
                  name={input.name}
                  fullWidth
                  variant="outlined"
                  required
                  onChange={(event) => (
                    saveRegistrationData(event), saveUser(event)
                  )}
                  className={classes.inputs}
                />
              )
            })}
            <label className={classes.label}>
              <Checkbox
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                style={{ padding: 0 }}
                required
              />
              <Typography component="p">
                I have read the
                <Typography
                  component="span"
                  style={{ color: 'black', textDecoration: 'underline' }}
                >
                  Terms and Conditions.
                </Typography>
              </Typography>
            </label>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.btn}
              disabled={loading}
            >
              SIGN UP NOW
            </Button>
          </form>
        </Grid>
        <Grid item className={classes.leftSide}>
          <Box className={classes.itemBox}>
            <Typography variant="h4" className={classes.leftSideText}>
              Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they
              sold out High Life.
            </Typography>
            <Box className={classes.row}>
              <Avatar alt="Remy Sharp" src={avatar}></Avatar>
              <Box className={classes.column}>
                <Typography component="span" className={classes.name}>
                  Takamaru Ayako
                </Typography>
                <Typography component="span" className={classes.position}>
                  Manager an inVision
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default SignUp
