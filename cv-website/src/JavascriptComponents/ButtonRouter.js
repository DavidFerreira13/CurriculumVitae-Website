import React from "react"
import {Link as RouterLink} from "react-router-dom"
import Button from "@material-ui/core/Button"

export default function ButtonRouter(){
    return (
        <div>
            <Button color="primary" component={RouterLink} to="/">
                Home
            </Button>
            <Button color="primary" component={RouterLink} to="/login">
                Login
            </Button>
            <Button color="primary" component={RouterLink} to="/signin">
                Sign in
            </Button>
        </div>
    )
}