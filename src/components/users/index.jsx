import React from 'react'
import axios from 'axios'
import UsersHeader from './usersHeader'
import UsersTable from './usersTable'
import useStyles from './style'

const Users = () => {
  const classes = useStyles()
  const [usersData, setUsersData] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  React.useEffect(async () => {
    await axios
      .get(`http://localhost:3000/database.json`)
      .then((response) => response)
      .then(({ data }) => setUsersData(data.users))
  }, [])
  return (
    <div className={classes.root}>
      <UsersHeader
        usersData={usersData}
        setUsersData={setUsersData}
        setSearchValue={setSearchValue}
      />
      <UsersTable
        usersData={usersData.filter((item) => {
          switch (searchValue) {
            case '':
              return item
            case item.name.toLowerCase().includes(searchValue.toLowerCase()):
              return item
            case item.id.toLowerCase().includes(searchValue.toLowerCase()):
              return item
          }
        })}
      />
    </div>
  )
}

export default Users
