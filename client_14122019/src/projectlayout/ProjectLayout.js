import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {AddProject} from "../addproject/AddProject";
import AddEmployee from "../addemployee/AddEmployee";
import ViewEmployee from "../viewemployee/ViewEmployee.js";

const ProjectLayout = ({ children }) => (
    <div>
    {children}
    </div>
);

const ProjectLayoutRoute = ({component: Component, ...rest}) => {
    return (
     <div>
        <Route {...rest} render={matchProps => (
    <ProjectLayout>
    <Component {...matchProps} />
    </ProjectLayout>
)} />
    <Route path={"/Project/Add"} component={AddProject}/>
    <Route path={"/project/Employee/Add"} component={AddEmployee}/>
    <Route path={"/project/Employee/View"} component={ViewEmployee}/>
    </div>
)
};

export default ProjectLayoutRoute;
