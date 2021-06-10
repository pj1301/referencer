import React, { FunctionComponent, useContext, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Home from './components/Home';
import CreateReference from './components/CreateReference';
import References from './components/References';
import './assets/stylesheets/styles.scss';
import { ReferencesProvider, ReferenceStore } from './context/references/context';
import { fetchItems } from './context/actions';
import { iReference } from './models/reference.interface';


const App: FunctionComponent = () => {
	const [refs, refDispatch] = useContext(ReferenceStore);

    useEffect(() => {
        setTheme();
		fetchItems<iReference>(refDispatch);
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
		<ReferencesProvider>
        	<App />
		</ReferencesProvider>
    </Router>,
    document.querySelector('div#⌘')
);
