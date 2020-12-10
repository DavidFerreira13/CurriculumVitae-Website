import React from 'react';
import '../Css/DropDownMenu.css'
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


export default function DropDownMenu() {
  
  const [myLabel, setmylabel] = React.useState("Show Password");
  const [mycolor, setmycolor] = React.useState("primary");
  const [passType, setPassType] = React.useState("password");

  
  function MyCheckBox(){

    return (    
      <FormControlLabel
        control={
          <CheckBox 
            checked={true}
            color={mycolor}
            onChange={()=>{
              mycolor === "primary"       ? setmycolor("secondary")     : setmycolor("primary")
              myLabel === "Show Password" ? setmylabel("Hide Password") : setmylabel("Show Password")
              passType === "password"     ? setPassType("text") : setPassType("password")
            }
          }
          />
        }
        label={myLabel}
      />
    )
  }

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
            } 
          }} />
          
          <TextField 
            id="passwordTextField"
            variant="outlined"
            label="Password"
            margin="normal"
            color="secondary"          
            type={passType}
            InputLabelProps={{
              style: {
                color: 'grey'
              } 
            }} />
        {MyCheckBox()}     
      </div>
    </ThemeProvider>
  )
}

  