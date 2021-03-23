import React,{ Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import { BrowserRouter, Router, Route, Link } from "react-router-dom";

import { createBrowserHistory } from "history";

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, IconButton, Tooltip } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@mdi/react';
import { mdiLogout } from '@mdi/js';
import EconetLogo from './assets/image/logo-adm.png';

import Home from './pages/Home';
import Configuracoes from './pages/Configuracoes';

import { textSpanContainsTextSpan } from 'typescript';
const { REACT_APP_PATH_URL, REACT_APP_HOST } = process.env;

const history = createBrowserHistory();


const MyToolbar = withStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
      
    },
    textUserName:{
      marginRight: '10px',
      fontSize: '12px'
    }
    
  })(
    ({ classes, title, onMenuClick }:any) => (
      <Fragment>
        <AppBar style={styles.toolbar} className={classes.aboveDrawer}>
              <Toolbar>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={onMenuClick}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.flex}
                >
                  {title}
                </Typography>
              </Toolbar>
              <Toolbar  >
                
                <Tooltip title='Sair'>
                  <Toolbar onClick={() => { } } style={{background:'#009688', cursor: 'pointer'}} >
                    <IconButton
                      color="inherit">
                          <Icon path={mdiLogout}
                              size={0.89}
                              vertical
                              rotate={0}
                              color="white"/>
                      </IconButton>
                  </Toolbar>
                </Tooltip>
            </Toolbar>
          
        </AppBar>
        
        <div className={classes.toolbarMargin} />
      </Fragment>
    )
  );
  
  const MyDrawer = withStyles({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
  })(
    ({ classes, variant, open, onClose, onItemClick }:any) => (
        <BrowserRouter>
            <Router history={history}>
                <Drawer  variant={variant} open={open} onClose={onClose}
                        classes={{
                        paper: classes.drawerPaper
                        }}
                >
                    <div 
                    className={clsx({
                        [classes.toolbarMargin]: variant === 'persistent'
                    })}
                    />
                   
                    
                  <List style={{color:'#fff'}} >
                    <ListItem 
                      button 
                      component={Link} 
                      to={`/`} 
                      onClick={onItemClick('Home')}>
                    </ListItem>
                    <ListItem 
                      button 
                      component={Link} 
                      to={`/`} 
                      onClick={onItemClick('Home')}>
                        <ListItemText>Home</ListItemText>
                    </ListItem>
                    <ListItem 
                      button 
                      component={Link} 
                      to={`/configuracoes`} 
                      onClick={onItemClick('Configuracoes')}
                      >
                        <ListItemText>Configurações</ListItemText>
                    </ListItem>
                  </List>
                
                </Drawer>
            
                <Route path={`/`}  component={Home} exact strict />
                <Route path={`/configuracoes`} component={Configuracoes} exact strict />
            </Router>
        </BrowserRouter>
    )
  );

const Routes = ({ classes, variant }:any) => {    
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState('Home');
  
    const toggleDrawer = () => {
      setDrawer(!drawer);
    };
  
    const onItemClick = (title:any) => () => {
      setTitle(title);
      setDrawer(variant === 'temporary' ? false : drawer);
      setDrawer(!drawer);
      
      
    };

    return (
      <div  className={classes.root}>
        <MyToolbar title='Administrativo' onMenuClick={toggleDrawer} />
        <MyDrawer
          open={drawer}
          onClose={toggleDrawer}
          onItemClick={onItemClick}
          variant={variant}
        />
      </div>
    );


}

const styles = ({
    toolbar : {
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between',
        background: '#1C4363',
        minHeight: '15px',
        height: '45px'

    }
});

export default withStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
  })(Routes);