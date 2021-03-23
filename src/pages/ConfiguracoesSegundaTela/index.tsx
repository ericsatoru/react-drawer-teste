import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';

import Button from '@material-ui/core/Button';
import useStyles from './styles';

const ConfiguracoesSegundaTela = (props:any) => {
    const classes = useStyles();
    
 
    return (
        <div className={classes.root}>
            <div  className={classes.innerRoot}>
            <div style={{ width: '95vw',display:'flex',flexDirection:'row',justifyContent:'center',padding:'10px'}}>
                  
                  Tela 2
              </div>
                <div style={{ width: '95vw',display:'flex',flexDirection:'row',justifyContent:'center',padding:'10px'}}>
                  
                    <Button  variant="contained" size="medium" >
                        Salvar
                    </Button>
                </div>   

            </div>
            <hr/>                   
        </div>
    ) 

        
}

export default ConfiguracoesSegundaTela;