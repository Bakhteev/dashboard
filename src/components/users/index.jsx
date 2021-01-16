import React from 'react'
import UsersHeader from './usersHeader'
import UsersTable from './usersTable'
import useStyles from './style'

const Users = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <UsersHeader />
      <UsersTable />
    </div>
  )
}

export default Users
