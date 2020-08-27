import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SuccessAlert() {
  const classes = useStyles();

  return (
    <div className={classes.root} id='copied-success-container'>
      <Alert style={{
          fontFamily: 'Nunito',
    }}
    variant='standard' severity="success">Password copied to clipboard!</Alert>
    </div>
  );
}