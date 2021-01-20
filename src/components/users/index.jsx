import React from 'react'
import axios from 'axios'
import UsersHeader from './usersHeader'
import UsersTable from './usersTable'
import useStyles from './style'

const Users = ({state}) => {
  const classes = useStyles()
  const [searchValue, setSearchValue] = React.useState('')
  return (
    <div className={classes.root}>
      <UsersHeader
        state={state}
        setSearchValue={setSearchValue}
      />
      <UsersTable
        usersData={state.filter((item) => {
          if (searchValue === '') {
            return item
          } else if (
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return item
          } else if (
            item.id.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return item
          }
        })}
      />
    </div>
  )
}

export default Users
