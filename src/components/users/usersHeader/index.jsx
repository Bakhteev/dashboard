import React from 'react'
import {
  AppBar,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Box,
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import SearchIcon from '@material-ui/icons/Search'
import IconFilter from './iconFilter'
import useStyle from './style'
import AddUser from './popUp'

const UsersHeader = ({
  state,
  setSearchValue,
}) => {
  const [open, setOpen] = React.useState(false)
  const [inputValue, setInputValue] = React.useState('')

  const classes = useStyle()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleInput = (event) => {
    setInputValue(event.target.value)
    setSearchValue(event.target.value)
  }
  return (
    <AppBar component="div" position="static" color="transparent" elevation="0">
      <Toolbar disableGutters={true} className={classes.root}>
        <Box className={classes.boxLeft}>
          <Button
            startIcon={<IconFilter />}
            variant="contained"
            classes={{
              contained: classes.contained,
            }}
          >
            FILTER
          </Button>
          <Box className={classes.searcheWrapper}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase
              placeholder="Search users by name, id"
              inputProps={{ 'aria-label': 'Search users by name, id' }}
              value={inputValue}
              onChange={(event) => handleInput(event)}
            />
          </Box>
        </Box>
        <Box>
          <Button
            startIcon={<AddIcon />}
            color="primary"
            variant="contained"
            onClick={handleClickOpen}
          >
            ADD USER
          </Button>
          <AddUser
            open={open}
            setOpen={setOpen}
            state={state}
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default UsersHeader
