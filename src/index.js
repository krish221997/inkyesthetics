import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {init} from "@rematch/core";
import * as models from "./models"
import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import {connectRouter, routerMiddleware} from "connected-react-router";
import {createBrowserHistory} from "history";
import Landing from "./pages/Landing";
import "./fonts/Sunshine.ttf";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ProjectOne from "./pages/ProjectOne";


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
            <Route path="/" component={Landing} exact={true}/>
            <Route path="/creative-collaborations" component={ProjectOne} exact={true}/>
        </Router>
    </Provider>,
document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
