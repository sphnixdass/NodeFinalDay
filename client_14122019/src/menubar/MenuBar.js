import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Menubar} from 'primereact/menubar';
import {Button} from 'primereact/button';
import {InputText} from "primereact/inputtext";
import MenuData from '../models/menudata'
import './MenuBar.css'
export class MenubarDemo extends Component {

    constructor() {
        super();

    }

    render() {
        return (


        <div  className="menu">
            <Menubar model={MenuData}>
            <InputText placeholder="Search" type="text"/>

        </Menubar>
        </div>

    );
    }
}

