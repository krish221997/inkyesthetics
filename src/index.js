import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {init} from "@rematch/core";
import * as models from "./models"
import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import {connectRouter, routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProjectOne from "./pages/ProjectOne";
import ProjectTwo from "./pages/ProjectTwo";
import LandingFinal from "./pages/LandingFinal";
import ProjectThree from "./pages/ProjectThree";
import ProjectFour from "./pages/ProjectFour";
import List from "./pages/List";
import AboutMe from "./pages/AboutMe";
import ReactGA from 'react-ga';
import Brands from "./pages/Brands";

ReactGA.initialize('G-KY07D96M2M'); // add your tracking id here.
ReactGA.pageview(window.location.pathname + window.location.search);


const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const middlewares = [routeMiddleware];


export const store = init({
    redux: {
        middlewares,
        reducers: {
            router: connectRouter(history),
        },
    },
    // plugins: [persistPlugin],
    models,
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={LandingFinal} exact={true}/>
            <Route path="/creative-collaborations" component={ProjectOne} exact={true}/>
            <Route path="/ampmateur" component={ProjectTwo} exact={true}/>
            <Route path="/chatea" component={ProjectThree} exact={true}/>
            <Route path="/devata-hastas" component={ProjectFour} exact={true}/>
            <Route path="/project-list" component={List} exact={true}/>
            <Route path="/about-me" component={AboutMe} exact={true}/>
            <Route path="/brands" component={Brands} exact={true}/>
        </Router>
    </Provider>,
document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
