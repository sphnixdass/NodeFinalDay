import React, {Component} from "react";
import axios from 'axios'
import {Fab, Grid, TextField,Select,MenuItem}from "@material-ui/core";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SaveIcon from '@material-ui/icons/Save';
import './AddProject.css'
import {Growl} from 'primereact/growl';
export class AddProject extends Component
{


    constructor(props)
    {
        super();
        this.state={
            projectId:0,
            projectName:"",
            location:"",
            countries:[]

        }
    }

    componentDidMount() {
        var countriesArr=[];
        axios.get('https://restcountries.eu/rest/v2/all').then(response=>{
            response.data.forEach(data=>{
               countriesArr.push(data.name);
            })
            this.setState({
                countries:countriesArr
            })
          console.log(this.state.countries);
        })

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
            "projectId":this.state.projectId,
            "projectName":this.state.projectName,
            "location":this.state.location
        }

        axios.post('http://localhost:5000/addProject/',obj)
            .then(res => {
               console.log(res);
                this.growl.show({severity: 'success', summary: 'Success Message', detail: 'Project created'});

            });
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
    <form  onSubmit={this.save}  className="project" >
        <fieldset>
        <legend>Project Information</legend>
        <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
        <TextField id="projectId" type="number" label="Project Id" variant="outlined"  margin="normal"
        onChange={this.handle("projectId")}
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField type="text" id="projectName" label="Project Name" variant="outlined"  margin="normal"
        onChange={this.handle("projectName")}
        />
        </Grid>
         <Grid item xs={12} sm={12}>
        <Select id="location" style={{left:2,width:210,top:10}} value={this.state.location} variant="outlined"
        onChange={this.handleChange}
        displayEmpty >

        {this.state.countries.map((country, i) => this.menuView(country, i))}
        </Select>
         </Grid>


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
