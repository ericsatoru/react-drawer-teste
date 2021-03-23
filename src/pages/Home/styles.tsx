import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:any) => ({
    root: {
      display:'flex',
      marginTop:'25px',
      padding:'20px'
    },
    innerRoot : {
      display:'flex', 
      width: '65vw',
       height: '65vh', 
       padding:'10px'
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    }
  }));

  export default useStyles;