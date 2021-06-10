import React, { FunctionComponent, useContext, useEffect, useState } from 'react'; 
import { ReferenceStore } from '../context/references/context';
import { updateItem, deleteItem } from '../context/actions';
import { iReference } from '../models/reference.interface';
import Input from './elements/Input';
import Reference from './Reference';

const References: FunctionComponent = () => {
    const [search, setSearch] = useState<string>('');
	const [refs, refDispatch] = useContext(ReferenceStore);

    function filterReferences(value: string): void {
        setSearch(value.toLowerCase());
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
				{refs.filter((ref: iReference) => {
					if (ref.title.toLowerCase().includes(search)) return ref;
					if (ref.authors.toLowerCase().includes(search)) return ref;
					if (ref.notes.toLowerCase().includes(search)) return ref;
				}).map((ref: iReference, i: number) => {
					return <Reference key={i} reference={ref} edit={editReference} remove={removeReference} />
				})}
			</div>
        </>
    )
}

export default References;