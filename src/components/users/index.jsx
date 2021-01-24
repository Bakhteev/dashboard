import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import UsersHeader from './usersHeader'
import UsersTable from './usersTable'
import useStyles from './style'
import { setUsersDatabase, showLoader, hideLoader } from '../../redux/actions/users'
import Loader from '../loader'

const url = 'https://dasboard-deae2-default-rtdb.firebaseio.com/'

const Users = () => {
  const classes = useStyles()
  const [searchValue, setSearchValue] = React.useState('')
  const dispatch = useDispatch()
  const state = useSelector(({ usersDatabase }) => {
    return {
      items: usersDatabase.items,
    }
  })

  showLoader()
  const fetchNotes = async () => {
    // showLoader()

    const res = await axios.get(`${url}/users.json`)
    // console.log(res.data)
    if (!res.data) {
      return (res.data = {})
    } else {
      // hideLoader()
      const payload = Object.keys(res.data).map((key) => {
        return {
          ...res.data[key],
          id: key,
        }
      })

      dispatch(setUsersDatabase(payload))
    }
  }
  // console.log(state)
  React.useEffect(() => {
    fetchNotes()
  }, [])
  console.log(state)
  return (
    <div className={classes.root}>
      <UsersHeader state={state.items} setSearchValue={setSearchValue} />
      {/* {loading ? (
        <Loader />
      ) : (
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
      )} */}
      {/* <Loader /> */}
      <UsersTable
        usersData={state.items.filter((item) => {
          if (searchValue === '') {
            return item
          } else if (
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return item
          } else if (
            item.userId.toLowerCase().includes(searchValue.toLowerCase())
          ) {
            return item
          }
        })}
      />
    </div>
  )
}

export default Users
