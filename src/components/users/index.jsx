import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import UsersHeader from './usersHeader'
import UsersTable from './usersTable'
import useStyles from './style'
import { setUsersDatabase } from '../../redux/actions/users'

const Users = () => {
  const classes = useStyles()
  const [searchValue, setSearchValue] = React.useState('')
  const dispatch = useDispatch()
  const state = useSelector(({ usersDatabase }) => {
    return {
      items: usersDatabase.items,
    }
  })
  React.useEffect(async () => {
    await axios
      .get(`https://dasboard-deae2.web.app/database.json`)
      .then((response) => response.data)
      .then(({ users }) => dispatch(setUsersDatabase(users)))
  }, [])
  return (
    <div className={classes.root}>
      <UsersHeader
        state={state.items}
        setSearchValue={setSearchValue}
      />
      <UsersTable
        usersData={state.items.filter((item) => {
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
