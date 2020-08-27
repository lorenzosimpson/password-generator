import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { blue, red } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";

const BlueCheckbox = withStyles({
  root: {
    "&$checked": {
      color: red[900]
    },
  },
  checked: {}
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxGroup(props) {
  const { passwordOptions, setPasswordOptions } = props;
  const handleChange = (event) => {
    setPasswordOptions({
      ...passwordOptions,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <FormGroup className='checkbox-group' column id='checkbox-group'>
      <FormControlLabel
        control={
          <BlueCheckbox
            checked={passwordOptions.upperCase}
            onChange={handleChange}
            name="upperCase"
          />
        }
        label={<Typography style={{fontFamily: 'Nunito', display: 'inline'}}>Uppercase Letters</Typography>}
      />

      <FormControlLabel
        control={
          <BlueCheckbox
            checked={passwordOptions.digits}
            onChange={handleChange}
            name="digits"
          />
        }
        label={<Typography style={{fontFamily: 'Nunito'}}>Digits</Typography>}
      />

      <FormControlLabel
        control={
          <BlueCheckbox
            checked={passwordOptions.symbols}
            onChange={handleChange}
            name="symbols"
          />
        }
        label={<Typography style={{fontFamily: 'Nunito'}}>Special Characters</Typography>}
      />
    </FormGroup>
  );
}
