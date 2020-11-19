import React from 'react';
import './DropDownMenu.css'
import TextField from '@material-ui/core/TextField'
import { deepPurple, green } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

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
        </div>
      </ThemeProvider>
    )
  }
  