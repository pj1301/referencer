import React, { FunctionComponent, useContext } from 'react'; 
import { ReferenceStore } from '../context/references/context';
import { updateItem, deleteItem } from '../context/actions';
import { iReference } from '../models/reference.interface';
import { SearchQueryStore } from '../context/search/context';
import Reference from './Reference';

const References: FunctionComponent = () => {
	const [refs, refDispatch] = useContext(ReferenceStore);
	const [searchQueries, searchQueryDispatch] = useContext(SearchQueryStore);

	//bad logic
	function filterRefs(references: Array<iReference>): Array<iReference> {
		const results: Array<iReference> = [...refs];
		const refCount = references.length;
		const queryCount = searchQueries.length;
		if (queryCount === 0) return refs;
		const handleFilter = (item: iReference) => {
			const index = references.indexOf(item);
			results.splice(index, 1);
		}
		for (let i = 0; i < refCount; i++) {
			for (let j = 0; j < queryCount; j++) {
				if (!references[i].title.toLowerCase().includes(searchQueries[j].toLowerCase())) handleFilter(references[i]);
				else if (!references[i].authors.toLowerCase().includes(searchQueries[j].toLowerCase())) handleFilter(references[i]);
				else if (!references[i].publisher.toLowerCase().includes(searchQueries[j].toLowerCase())) handleFilter(references[i]);
				else if (!references[i].url.toLowerCase().includes(searchQueries[j].toLowerCase())) handleFilter(references[i]);
			}
		}
		return results;
	}

	function editReference(id: string): void { console.log({ action: 'edit', id }); }

	function removeReference(id: string): void {
		deleteItem<iReference>(id, refDispatch);
	}

    return(
        <div id="references">
			<div className="content-panel">
				{filterRefs(refs).map((ref: iReference, i: number) => {
					return <Reference key={i} reference={ref} edit={editReference} remove={removeReference} />
				})}
			</div>
        </div>
    )
}

export default References;

