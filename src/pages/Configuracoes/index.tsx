import React, { useEffect, useState } from 'react';
import { BrowserRouter, Router, Link, Route, Switch, StaticRouter, useRouteMatch } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ConfiguracoesSegundaTela from '../ConfiguracoesSegundaTela';

import useStyles from './styles'
const history = createBrowserHistory();

const { REACT_APP_URL_ECOSISTEM, REACT_APP_HOST, REACT_APP_URL_HOST } = process.env;
/* 
* Componente donfiguração com o 
*/




const Menu = (props: any) => {
  const classes = useStyles();
  const { location } = props;
  let { path, url } = useRouteMatch();

  return (
    <>
      <Grid className={classes.root} container spacing={2} wrap="nowrap" >
        <Link to={`${url}/tela2`} >
          <Grid item xs={2}>
            <IconButton>
              <Paper className={classes.paper}>
                <Typography><PeopleAltIcon /></Typography>
                <Typography>Menu</Typography>
              </Paper>
            </IconButton>
          </Grid>
        </Link>
      </Grid>
    </>
  )
}


const Configuracoes = (props: any) => {

  let { path, url } = useRouteMatch();
  const classes = useStyles();


  return (
    <>
        <Switch >
          <Route path={path} exact component={Menu}/>
          <Route path={`${path}/tela2`} component={ConfiguracoesSegundaTela} />
        </Switch>
    </>
  )
}

export default Configuracoes;