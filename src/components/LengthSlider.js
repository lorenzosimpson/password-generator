import React, { useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {blue} from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


const BlueSlider = withStyles({
  root: {
      color: blue[600],
      width: '60%',
  },
})((props) => <Slider color="default" {...props} />);

export default function LengthSlider(props) {

  const { passwordOptions, setPasswordOptions} = props;
  const prevValue = passwordOptions.length;

  const handleChange = (prev, newVal) => {
    if (prevValue !== newVal) {
    setPasswordOptions({...passwordOptions, length: newVal});
    }
  };

  return (
    <div className='length-slider-container'>
      <Typography id="discrete-slider" gutterBottom>
        Length
      </Typography>
      <BlueSlider
        defaultValue={30}
        onChange={handleChange}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        min={6}
        max={40}
        value={passwordOptions.length}
      />
     
    </div>
  );
}
