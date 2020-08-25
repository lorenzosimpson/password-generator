import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const BlueCheckbox = withStyles({
  root: {
    "&$checked": {
      color: blue[600]
    }
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
        label="Uppercase Letters"
      />

      <FormControlLabel
        control={
          <BlueCheckbox
            checked={passwordOptions.digits}
            onChange={handleChange}
            name="digits"
          />
        }
        label="Digits"
      />

      <FormControlLabel
        control={
          <BlueCheckbox
            checked={passwordOptions.symbols}
            onChange={handleChange}
            name="symbols"
          />
        }
        label="Symbols"
      />
    </FormGroup>
  );
}
