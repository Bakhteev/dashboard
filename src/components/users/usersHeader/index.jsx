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

const UsersHeader = () => {
  const [open, setOpen] = React.useState(false)
  const classes = useStyle()

  const handleClickOpen = () => {
    setOpen(true)
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
          <AddUser open={open} setOpen={setOpen} />
        </Box>
      </Toolbar>
    </AppBar>
  )
}


export default UsersHeader
