import React, { useRef, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
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
import { inputs } from './const'
import signUp from '../../assets/signUp/signUp.png'
import avatar from '../../assets/signUp/girl.svg'

const SignUp = () => {
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState('')
  const [user, setUser] = useState({
    name: '',
    lastName: '',
    photo: ''
  })
  const [registration, setRegistration] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  })
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const saveUser = (event) =>{
    setUser({
      name: event.target.form[0].value,
      lastName: event.target.form[2].value,
      photo: '',
    })
  }
  const saveRegistrationData = (event) => {
    setRegistration({
      email: event.target.form[4].value,
      password: event.target.form[6].value,
      passwordConfirm: event.target.form[8].value,
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
      <Grid container style={{justifyContent: 'center',
      }}>
        <Grid item xs={6} style={{ padding: '55px 64px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              to="login"
              style={{
                fontWeight: 'normal',
                fontSize: 14,
                lineHeight: 1.6,
                textAlign: 'right',
                letterSpacing: -0.05,
                color: '#9EA0A5',
              }}
            >
              Don't have an account?
              <Typography
                component="span"
                style={{ textDecoration: 'underline' }}
              >
                {' '}
                Sign Up
              </Typography>
            </Link>
          </div>
          <div>
            <Typography
              variant="h2"
              style={{
                fontWeight: 500,
                fontSize: 24,
                lineHeight: 1.16,
                letterSpacing: -0.06,
                color: '#212529',
              }}
            >
              Sign up to Brainalityca
            </Typography>
            <Typography
              variant="h6"
              style={{
                margin: '4px 0 40px',
                fontWeight: 'normal',
                fontSize: 14,
                lineHeight: 1.4,
                letterSpacing: -0.05,
                color: '#9EA0A5',
              }}
            >
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
                  onChange={(event) => saveRegistrationData(event)}
                  style={{ marginTop: 0, marginBottom: 18 }}
                />
              )
            })}
            <label
              style={{
                fontWeight: 'normal',
                fontSize: 14,
                lineHeight: 1.4,
                letterSpacing: -0.05,
                color: '#9EA0A5',
                display: 'flex',
                
              }}
            >
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
              style={{ width: '100%', marginTop: 24 }}
              disabled={loading}
            >
              SIGN UP NOW
            </Button>
          </form>
        </Grid>
        <Grid
          item
          style={{
            background: `url(${signUp}) no-repeat left`,
            maxWidth: '29%',
            height: '640px',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <Box
            // className={classes.itemBox}
            style={{ padding: '0 18px 24px 24px' }}
          >
            <Typography
              variant="h4"
              style={{
                fontWeight: 'normal',
                fontSize: 16,
                lineHeight: 1.5,
                letterSpacing: -0.0571429,
                color: '#FFFFFF',
              }}
            >
              Hella narwhal Cosby sweater McSweeney's, salvia kitsch before they
              sold out High Life.
            </Typography>
            <Box style={{ display: 'flex', marginTop: 18 }}>
              <Avatar alt="Remy Sharp" src={avatar}></Avatar>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 12,
                }}
              >
                <Typography
                  component="span"
                  style={{
                    fontWeight: 'normal',
                    fontSize: 14,
                    lineHeight: 1.14,
                    letterSpacing: -0.05,
                    color: '#FFFFFF',
                    marginBottom: 2,
                  }}
                >
                  Takamaru Ayako
                </Typography>
                <Typography
                  component="span"
                  style={{
                    fontWeight: 'normal',
                    fontSize: 14,
                    lineHeight: 1.14,
                    letterSpacing: -0.0428571,
                    color: '#FFFFFF',
                  }}
                >
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
