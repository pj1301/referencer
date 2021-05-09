import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Home from './components/Home';
import CreateReference from './components/CreateReference';
import References from './components/References';
import './assets/stylesheets/styles.scss';

const App = () => {

    useEffect(() => {
        setTheme();
    }, []);

    function setTheme() {
        document.querySelector('#⌘')?.classList.add('dark');
    }

    return(
        <>
            <div id="navigation-panel">
                <Link className="nav-option" to="/">Home</Link>
                <Link className="nav-option" to="/references">View All</Link>
                <Link className="nav-option" to="/create-reference">Create Reference</Link>
            </div>
            <div id="content-panel">
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/references" component={References} />
                    <Route path="/create-reference" component={CreateReference} />
                    <Route path="*" >
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </>
    )
}

render(
    <Router>
        <App />
    </Router>,
    document.querySelector('div#⌘')
);
