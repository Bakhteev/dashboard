import React from 'react'
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
  Grid,
} from '@material-ui/core'
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined'
import avatar from '../../assets/navSidebar/profileImg.png'
import useStyles from './style'
import { sidebarItems } from './const'
import { NavLink } from 'react-router-dom'

const SidebarNav = () => {
  const classes = useStyles()
  return (

        <Drawer
          className={classes.sidebar}
          variant="permanent"
          anchor="left"
          classes={{
            paper: classes.root,
          }}
        >
          <Paper elevation={0} className={classes.avatar}>
            <img src={avatar} alt="" />
            <Typography variant="h5" className={classes.name}>
              Roman Kutepov
            </Typography>
            <Typography variant="span" className={classes.profession}>
              Brain Director
            </Typography>
          </Paper>
          <Divider variant="middle" />
          <List className={classes.list}>
            {sidebarItems.map((item, index) => (
              <ListItem
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
          <Typography variant="span" className={classes.span}>
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
