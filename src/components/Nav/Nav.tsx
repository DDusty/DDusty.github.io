import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AccountButton from './AccountButton';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: 'white',
    'background-color': 'transparent',
    // borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '10px',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    fontFamily: '"Amarante", cursive',
    fontSize: '30px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: 'white',
    fontWeight: 'bolder',
    fontSize: '16px',
    margin: theme.spacing(1, 2),
    textDecoration: 'none',
    transition: 'all 0.2s ease 0s',
    '&:hover': {
      textDecoration: 'none',
      color: '#e0e3bd'
    },
  },
  brandLink: {
    textDecoration: 'none',
    color: '#e0e3bd',
    transition: 'all 0.2s ease 0s',
    '&:hover': {
      textDecoration: 'none',
      color: 'white'
    },
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}}>
            {/* <Typography style={{width: 'fit-content'}} variant="h6" color="inherit" noWrap className={classes.toolbarTitle}> */}
              {/* <a className={ classes.brandLink } href="/">Tomb Finance</a> */}
              <NavLink to="/" color="inherit" className={classes.brandLink}>
                <span style={{fontSize: '24px'}}>Doge Finance</span>
              </NavLink>
            {/* </Typography> */}
            <Box mr={5}>
              <NavLink activeClassName='active-link' exact color="textPrimary" to="/app" className={classes.link}>
                App
              </NavLink>
              <NavLink activeClassName='active-link' color="textPrimary" to="/app/cemetery" className={classes.link}>
                Cemetery
              </NavLink>
              <NavLink activeClassName='active-link' color="textPrimary" to="/app/masonry" className={classes.link}>
                Masonry
              </NavLink>
              <NavLink activeClassName='active-link' color="textPrimary" to="/app/pit" className={classes.link}>
                Pit
              </NavLink>
              {/* <NavLink activeClassName='active-link' color="textPrimary" to="/app/sbs" className={classes.link}>
                SBS
              </NavLink>
              <NavLink activeClassName='active-link' color="textPrimary" to="/app/liquidity" className={classes.link}>
                Liquidity
              </NavLink>
              <NavLink activeClassName='active-link' color="textPrimary" to="/app/regulations" className={classes.link}>
                Regulations
              </NavLink> */}
              <a href="https://docs.tomb.finance" className={classes.link}>
                Docs
              </a>
            </Box>
            <AccountButton text="Connect" />
          </div>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Doge Finance
            </Typography>

            <Drawer
              className={classes.drawer}
              onEscapeKeyDown={handleDrawerClose}
              onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItemLink primary="Home" to="/" />
                <ListItemLink primary="Cemetery" to="/cemetery" />
                <ListItemLink primary="Masonry" to="/masonry" />
                <ListItemLink primary="Pit" to="/pit" />
                <ListItemLink primary="SBS" to="/sbs" />
                <ListItemLink primary="Liquidity" to="/liquidity" />
                <ListItemLink primary="Regulations" to="/regulations" />
                <ListItem button component="a" href="https://docs.tomb.finance">
                  <ListItemText>Docs</ListItemText>
                </ListItem>
                <ListItem style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <AccountButton text="Connect" />
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
