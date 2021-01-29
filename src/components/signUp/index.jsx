import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Typography,
  TextField,
  Grid,
  Checkbox,
  Box,
  Avatar,
} from '@material-ui/core'
import { inputs } from './const'
import signUp from '../../assets/signUp/signUp.png'
import avatar from '../../assets/signUp/girl.svg'

const SignUp = () => {
  return (
    <Grid container>
      <Grid item xs={6} style={{ padding: '55px 64px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link
            to=""
            style={{
              fontWeight: 'normal',
              fontSize: 14,
              lineHeight: 1.6,
              textAlign: 'right',
              letterSpacing: -0.05,
              color: '#9EA0A5',
            }}
          >
            Have an account?
            <Typography variant="span" style={{ textDecoration: 'underline' }}>
              {' '}
              Sign In
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
        <form>
          {inputs.map((input) => {
            return (
              <TextField
                autoFocus
                margin="dense"
                id={input.id}
                label={input.label}
                type={input.type}
                fullWidth
                variant="outlined"
                // className={classes.textField}
                style={{ marginTop: 0, marginBottom: 18 }}
                // onChange={(event) => saveData(event)}
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
            }}
          >
            <Checkbox
              color="primary"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              style={{ padding: 0 }}
            />
            <Typography variant="p">
              I have read the
              <Typography
                variant="span"
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
            // className={classes.itemBtn}
            // onClick={handleSubmit}
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
          <Box style={{ display: 'flex', marginTop: 18,
           }}>
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
                variant="span"
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
                variant="span"
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
  )
}

export default SignUp
