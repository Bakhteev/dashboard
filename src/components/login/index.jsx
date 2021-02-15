import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  Button,
  Typography,
  TextField,
  Grid,
  Box,
  Avatar,
} from '@material-ui/core'
import avatar from '../../assets/signUp/girl.svg'
import { useAuth } from '../../context/authContext'
import { Alert, AlertTitle } from '@material-ui/lab'
import axios from 'axios'
import { setRegisteredUser } from '../../redux/actions/registratedUsers'
import { inputs } from './const'
import useStyles from './style'

const url = 'https://dasboard-deae2-default-rtdb.firebaseio.com'

const Login = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [registration, setRegistration] = useState({
    email: '',
    password: '',
  })

  const saveRegistrationData = (event) => {
    setRegistration({
      email: event.target.form[0].value,
      password: event.target.form[2].value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await login(registration.email, registration.password)
      const res = await axios.get(`${url}/registratedUser.json`)
      if (!res.data) {
        return (res.data = {})
      } else {
        const payload = Object.keys(res.data)
          .map((key) => {
            return {
              ...res.data[key],
              id: key,
            }
          })
          .filter((user) => user.email === registration.email)

        localStorage.setItem('payload', JSON.stringify(payload))
        const localStoragePayloadGet = localStorage.getItem('payload')
        const localStoragePayload = JSON.parse(localStoragePayloadGet)

        dispatch(setRegisteredUser(localStoragePayload))
      }
      history.push('/users')
    } catch {
      setError('Failed to sign in')
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
      <Grid container className={classes.gridContainer}>
        <Grid item xs={6} className={classes.gridItem1}>
          <div className={classes.header}>
            <Link to="/signUp" className={classes.link}>
              Don have an account?
              <Typography
                variant="span"
                style={{ textDecoration: 'underline' }}
              >
                {' '}
                Sign Up
              </Typography>
            </Link>
          </div>
          <div>
            <Typography variant="h2" className={classes.title}>
              Log in to Brainalityca
            </Typography>
            <Typography variant="h6" className={classes.subTitle}>
              Log in on the internal platform
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
                  className={classes.input}
                  onChange={(event) => saveRegistrationData(event)}
                />
              )
            })}
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className={classes.btn}
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
            <Box className={classes.row} style={{ display: 'flex', marginTop: 18 }}>
              <Avatar alt="Remy Sharp" src={avatar}></Avatar>
              <Box className={classes.column}>
                <Typography variant="span" className={classes.name}>
                  Takamaru Ayako
                </Typography>
                <Typography variant="span" className={classes.position}>
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

export default Login
