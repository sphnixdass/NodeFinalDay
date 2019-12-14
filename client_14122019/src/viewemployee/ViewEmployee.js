import React, {Component} from "react";
import axios from 'axios'
import {Fab, Grid, TextField,Select,MenuItem}from "@material-ui/core";

import './ViewEmployee.css'
import * as employeeAction from '../reduxcontainer/actions/employeeAction';
import { connect } from 'react-redux';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {DataTable} from 'primereact/datatable';

import './ViewEmployee.css';


class ViewEmployee extends Component
{

    constructor(props)
    {
        super(props);
        this.state={
            employees:[],
            cars: [],
            layout: 'list',
            selectedCar: null, 
            visible: false,
            sortKey: null,
            sortOrder: null


        };
        // this.carservice = new CarService();
        // this.itemTemplate = this.itemTemplate.bind(this);
        // this.onSortChange = this.onSortChange.bind(this);

    }

    componentDidMount() {
        // this.carservice.getCarsLarge().then(data => this.setState({cars: data}));
        axios.get('http://localhost:5002/viewEmployee').then(response=>{
            console.log(response.data);
            this.setState({employees:response.data})
          
            
            console.log(this.state.employees);
        });

        //this.carservice.getCarsLarge().then(data => this.setState({cars: data}));

    }
    

    handle=input=>e=>{
        e.preventDefault();
        this.setState({[input]:e.target.value})
    }
    handleChange = event => {

        this.setState({location:event.target.value})
    };
   
    menuView(data, index){

        return (

            <MenuItem key={index} style={{ backgroundColor: '#a6cad8'}} value={data}>
            {data}
            </MenuItem>

    )
    }

    export() {
        this.dt.exportCSV();
    }

    displaySelection(data) {
        if(!data || data.length === 0) {
            return <div style={{textAlign: 'left'}}>No Selection</div>;
        }
        else {
            if(data instanceof Array)
                return <ul style={{textAlign: 'left', margin: 0}}>{data.map((employee,i) => <li key={employee.employeeNo}>{employee.employeeNo + ' - ' + employee.firstName + ' - ' + employee.lastName + ' - ' + employee.mobileNo}</li>)}</ul>;
            else
                return <div style={{textAlign: 'left'}}>Selected Employee: {data.employeeNo + ' - ' + data.firstName+ ' - ' + data.lastName + ' - ' + data.mobileNo}</div>
            }
        }

    render()
    {
        // const header = this.renderHeader();
  let paginatorLeft = <Button icon="pi pi-refresh"/>;
        let paginatorRight = <Button icon="pi pi-cloud-upload"/>;
        var header = <div style={{textAlign:'left'}}><Button type="button" icon="pi pi-external-link" iconPos="left" label="CSV" onClick={this.export}></Button></div>;

        const columns = [
            {field: 'employeeNo', header: 'EmployeeNo'},
            {field: 'firstName', header: 'First Name'},
            {field: 'lastName', header: 'Last Name'},
            {field: 'email', header: 'Email'},
            {field: 'mobileNo', header: 'Mobile No'}
        ];

        const dynamicColumns = columns.map((col,i) => {
            return <Column key={col.field} field={col.field} header={col.header} />;
        });

        return(
             <div className="table">
            <div className="content-section">
            <div className="feature-intro">
            <h1>Employee Table - Export</h1>

        </div>
        </div>
        <div className="content-section implementation">

        <DataTable value={this.state.employees}  header={header}
            footer={this.displaySelection(this.state.selectedEmployee)}
            selection={this.state.selectedEmployee} onSelectionChange={e => this.setState({selectedEmployee: e.value})}
        ref={(el) => { this.dt = el; }} paginator={true} paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rows={10} rowsPerPageOptions={[5,10,20]}>
           {dynamicColumns}
    <Column selectionMode="multiple" style={{width:'5em'}}/>
            </DataTable>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployee);
