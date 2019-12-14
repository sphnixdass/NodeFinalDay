import React, {Component} from "react";
import axios from 'axios'
import {Fab, Grid, TextField,Select,MenuItem}from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SaveIcon from '@material-ui/icons/Save';
import './AddEmployee.css'
import {Growl} from 'primereact/growl';
import * as employeeAction from '../reduxcontainer/actions/employeeAction';
import { connect } from 'react-redux';
class AddEmployee extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            employeeNo:0,
            firstName:"",
            lastName:"",
            mobileNo:0,
            email:"",
            dob:"",
            userName:"",
            password:""


        }
    }

    componentDidMount() {


    }
    handle=input=>e=>{
        e.preventDefault();
        this.setState({[input]:e.target.value})
    }
    handleChange = event => {

        this.setState({location:event.target.value})
    };
    save=(e)=>
    {
        e.preventDefault();
        console.log(this.state);

        var obj={
            employeeNo:this.state.employeeNo,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            mobileNo:this.state.mobileNo,
            email:this.state.email,
            dob:this.state.dob,
            userName:this.state.userName,
            password:this.state.password

        }
        this.props.createEmployee(obj);
        this.growl.show({severity: 'success', summary: 'Success Message', detail: 'Employee created'});

    }

    menuView(data, index){

        return (

            <MenuItem key={index} style={{ backgroundColor: '#a6cad8'}} value={data}>
            {data}
            </MenuItem>

    )
    }


    render()
    {
        return(
            <div>
            <div className="growl">
        <Growl ref={(el) => this.growl = el}  />
    </div>
            <form  onSubmit={this.save}  className="employee" >
        <fieldset>
        <legend>Employee Information</legend>
    <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
        <TextField id="employeeNo" type="number" label="Employee No" variant="outlined"  margin="normal"
        onChange={this.handle("employeeNo")}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField type="text" id="firstName" label="First Name" variant="outlined"  margin="normal"
        onChange={this.handle("firstName")}
        />
        </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField type="text" id="lastName" label="Last Name" variant="outlined"  margin="normal"
        onChange={this.handle("lastName")}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField type="date" id="dob"  variant="outlined"  margin="normal"
        onChange={this.handle("dob")}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField type="number" id="mobileNo" label="Mobile No" variant="outlined"  margin="normal"
        onChange={this.handle("mobileNo")}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField type="text" id="email" label="Email" variant="outlined"  margin="normal"
        onChange={this.handle("email")}
        />
        </Grid>

        <Grid item xs={12} sm={12}>
        <TextField type="text" id="userName" label="User Name" variant="outlined"  margin="normal"
        onChange={this.handle("userName")}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField type="password" id="password" label="Password" variant="outlined"  margin="normal"
        onChange={this.handle("password")}
        />
        </Grid>






        <Fab style={{top:20}} color="primary" aria-label="add" type="submit" >
        <SaveIcon />
        </Fab>
        </fieldset>
        </form>
        </div>
    );
    }


}

const mapStateToProps = (state, ownProps) => {
    return {
        employees: state.employees
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createEmployee: employee => dispatch(employeeAction.createEmployee(employee)),
        deleteEmployee: index =>dispatch(employeeAction.deleteEmployee(index))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
