import React, {Component} from 'react';
import LogoRBS from './logo/Logo'
import './App.css';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import LoginLayoutRoute from "./loginlayout/LoginLayout";
import {Login} from './login/Login'
import ProjectLayoutRoute from './projectlayout/ProjectLayout'
import {Menu} from './menu/Menu'
import {MenubarDemo} from "./menubar/MenuBar";
import {AddProject} from "./addproject/AddProject";

//stateful component
export class App extends Component
{
    //optional
    constructor(props)
    {
        super(props);
        //create state
        this.state={
            date:new Date()
        }

    }


    componentDidMount() {
        this.timerId=setInterval(()=>this.tick(),1000)
    }


    componentWillMount() {
        clearInterval(this.timerId);
    }
//tick method
    tick()
    {
        this.setState({
            date:new Date()
        })
    }

    render() {
        return(
            <div>
            <header className="header">
             <LogoRBS/>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            </header>
            <Router>
            <Switch>
             <Route exact path="/">
             <Redirect to="/home" />
             </Route>

            <LoginLayoutRoute path="/home" component={Login} />
            <ProjectLayoutRoute path="/project" component={MenubarDemo} />
            </Switch>
            </Router>
           </div>

        )
    }
}


/*
function App() {
  return (
    <header>
      <LogoRBS/>
    </header>

  );
}

export default App;
*/
