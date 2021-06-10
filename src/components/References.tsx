import React, { FunctionComponent, useContext, useState } from 'react'; 
import { ReferenceStore } from '../context/references/context';
import { updateItem, deleteItem } from '../context/actions';
import { iReference } from '../models/reference.interface';
import Input from './elements/Input';
import Reference from './Reference';

const References: FunctionComponent = () => {
    const [search, setSearch] = useState('');
	const [refs, refDispatch] = useContext(ReferenceStore);

    function filterReferences(value: string): void {
        setSearch(value);
        console.log({value});
    }

	function editReference(id: string): void { console.log({ action: 'edit', id }); }

	function removeReference(id: string): void {
		deleteItem<iReference>(id, refDispatch);
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
			<div className="content-panel">
				{refs.map((ref: iReference, i: number) => {
					return <Reference key={i} reference={ref} edit={editReference} remove={removeReference} />
				})}
			</div>
        </>
    )
}

export default References;