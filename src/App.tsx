import React, { useEffect } from 'react';
import { render } from 'react-dom';
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
            <h1>Hello world!!!</h1>
            <p>A traveller came...</p>
        </>
    )
}

render(<App />, document.querySelector('div#⌘'));
