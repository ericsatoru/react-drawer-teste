import React, { useLayoutEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

import useStyles from './styles';


const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
            <div style={{ width: '95vw',display:'flex',flexDirection:'row',justifyContent:'center',padding:'10px'}}>
                  
                  Home
              </div>
              <div style={{ width: '95vw',display:'flex',flexDirection:'row',justifyContent:'center',padding:'10px'}}>
                
                  <Button  variant="contained" size="medium" >
                      Salvar
                  </Button>
              </div>   
                 
        </div>
  );
}

export default Home;