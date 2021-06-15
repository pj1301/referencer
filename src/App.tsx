import React, { FunctionComponent, useContext, useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import References from './components/References';
import './assets/stylesheets/styles.scss';
import { ReferencesProvider, ReferenceStore } from './context/references/context';
import { fetchItems } from './context/actions';
import { iReference } from './models/reference.interface';
import Search from './components/Search';
import Filters from './components/FIlters';
import { SearchQueryProvider } from './context/search/context';
import Sidebar from './components/Sidebar';


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
        <div id="App">
			<SearchQueryProvider>
				<Search />
			</SearchQueryProvider>
			<Filters />
			<SearchQueryProvider>
				<div className="content-panel">
					<Sidebar />
					<References />
				</div>
			</SearchQueryProvider>
        </div>
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
