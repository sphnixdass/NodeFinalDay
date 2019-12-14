import React, {Component} from "react";
import {Grid} from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {Fab} from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person'
import axios from 'axios'
import './Login.css'
export class Login extends Component
{
    constructor(props)
    {
        super()
        this.state = {
            "userName":"",
            "password":""
        }

    }

    handle=input=>e=>{
        this.setState({[input]:e.target.value})
    }

    validate=(e)=>
    {
        e.preventDefault();
        console.log(this.state);
        var obj={
            "userName":this.state.userName,
            "password":this.state.password
        }
        axios.post('http://localhost:5002/login/',obj)
            .then(res => {
                //console.log(res.data)
                //console.log(this.state.userName);
                //console.log(res.data[0].userName);
                if(this.state.userName == res.data[0].userName)
                {
                    window.location.href="/project?userName="+this.state.userName;
                }
                else
                    window.location.href="/home";

            });
    }





    render() {

        return(
            <form  onSubmit={this.validate} style={{ backgroundColor: '#F0F0FF' }}  className="login" >
            <fieldset>
            <legend>Login</legend>
            <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
            <TextField id="userName" label="User Name" variant="outlined"  margin="normal"
            onChange={this.handle("userName")}
            />
            </Grid>
            <Grid item xs={12} sm={12}>
            <TextField type="password" id="password" label="Password" variant="outlined"  margin="normal"
            onChange={this.handle("password")}
            />
            </Grid>
            </Grid>
            <Fab color="primary" aria-label="add" type="submit" >
            <PersonIcon />
            </Fab>
            </fieldset>
            </form>


        );

    }
}
