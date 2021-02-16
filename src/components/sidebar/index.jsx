import React from 'react'
import { useSelector } from 'react-redux'
import {
  Drawer,
  Paper,
  Typography,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
} from '@material-ui/core'
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined'
import avatar from '../../assets/navSidebar/profileImg.png'
import useStyles from './style'
import { sidebarItems } from './const'
import { NavLink } from 'react-router-dom'

const SidebarNav = () => {
  const classes = useStyles()

  const state = useSelector(({ registratedUsers }) => {
    return {
      items: registratedUsers.items,
    }
  })
  return (
    <Drawer
      className={classes.sidebar}
      variant="permanent"
      anchor="left"
      classes={{
        paper: classes.root,
      }}
    >
      {state.items &&
        state.items.map((item) => {
          return (
            <Paper elevation={0} className={classes.avatar} key={item.id}>
              <img src={avatar} alt="" />
              <Typography variant="h5" className={classes.name}>
                {item.name}&nbsp;{item.lastName}
              </Typography>
              <Typography component="span" className={classes.profession}>
                {item.position ? item.position : 'Freelancer'}
              </Typography>
            </Paper>
          )
        })}
      <Divider variant="middle" />
      <List className={classes.list}>
        {sidebarItems.map((item) => (
          <ListItem
            classes={{ gutters: classes.listItem }}
            component="li"
            button
            key={item.text}
            className={classes.listItem}
          >
            <NavLink
              to={item.link}
              className={classes.link}
              activeClassName={classes.activeLink}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider variant="middle" />
      <Typography component="span" className={classes.span}>
        Support
      </Typography>
      <Button
        startIcon={<ContactSupportOutlinedIcon />}
        classes={{
          label: classes.btn,
        }}
      >
        Support
      </Button>
    </Drawer>
  )
}

export default SidebarNav
