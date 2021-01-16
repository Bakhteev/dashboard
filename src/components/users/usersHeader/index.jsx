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
import useStyles from './style'

const UsersHeader = () => {
  const classes = useStyles()
  return (
    <AppBar component="div" position="static" color="transparent" elevation="0">
      <Toolbar disableGutters={true} className={classes.root}>
        <Box className={classes.boxLeft}>
          <Button startIcon={<IconFilter />}>FILTER</Button>
          <Box className={classes.searcheWrapper}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase
              // className={classes.input}
              placeholder="Search users by name, id"
              inputProps={{ 'aria-label': 'Search users by name, id' }}
            />
          </Box>
        </Box>
        <Button startIcon={<AddIcon />} color="primary" variant="contained">
          ADD USER
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default UsersHeader
