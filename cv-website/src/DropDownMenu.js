import React from 'react';
import './DropDownMenu.css'
import TextField from '@material-ui/core/TextField'
import { deepPurple, green } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'

const theme = createMuiTheme({
  palette:{
    primary: {
      main: green[800]      
    },
    secondary:{
      main: deepPurple["A200"]
    }
  }
})

function MyCheckBox(){
  var pwtf = document.getElementById("passwordTextField");
  const [checked, setChecked] = React.useState(true);
  var myLabel = "Show Password";

  if (checked && pwtf != null) {
     myLabel = "Hide Password"
     pwtf.type = "text" 
  } else if(pwtf != null){
    pwtf.type = "password"
  }

  return (    
    <FormControlLabel
      control={
        <CheckBox 
          checked={checked}
          onChange={(e)=>setChecked(e.target.checked)}
          color="primary"
        />
      }
      label={myLabel}
    />
  )
}

export default function DropDownMenu() {
 
    return (
      <ThemeProvider theme={theme}>
        <div className="dropdown">

          <TextField 
              variant="outlined"
              label="Username"
              placeholder="example@email.com"
              margin="normal"
              color="primary"
              type="email"
              InputLabelProps={{
                style: {
                  color: 'grey'
                } }}               
            />
            <TextField 
            id="passwordTextField"
            variant="outlined"
            label="Password"
            margin="normal"
            color="secondary"
            type="password"
            InputLabelProps={{
              style: {
                color: 'grey'
              } }} 
          />
          <MyCheckBox/>
        </div>
      </ThemeProvider>
    )
  }
  