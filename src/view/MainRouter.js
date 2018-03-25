import React from 'react';
import { Route, Switch } from "react-router-dom";
import ChartistContainer from "../component/chartist/ChartistContainer";
import C3Container from "../component/c3/C3Container";
import ChartjsContainer from "../component/chartjs/ChartjsContainer";

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={ChartistContainer}/>
                <Route path='/chartist' component={ChartistContainer}/>
                <Route path='/chartjs' component={ChartjsContainer}/>
                <Route path='/c3' component={C3Container}/>
            </Switch>
        </main>
    );
};

export default Main;
