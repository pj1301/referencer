import React, { useState } from 'react'; 
import Input from './elements/Input';

const References = (): JSX.Element => {
    const [search, setSearch] = useState('');

    function filterReferences(value: string): void {
        setSearch(value);
        console.log({value});
    }

    return(
        <>
            <h1>References</h1>
            <div className="filter-panel">
                <h3>Filters</h3>
                <div className="filters-wrap">
                    <Input type="text" changeFn={filterReferences} />
                </div>
            </div>

        </>
    )
}

export default References;