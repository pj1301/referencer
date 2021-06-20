import React, { FunctionComponent, useContext } from 'react'; 
import { ReferenceStore } from '../context/references/context';
import { updateItem, deleteItem } from '../context/actions';
import { iReference } from '../models/reference.interface';
import { SearchQueryStore } from '../context/search/context';
import Reference from './Reference';

const References: FunctionComponent = () => {
	const [refs, refDispatch] = useContext(ReferenceStore);
	const [searchQueries, searchQueryDispatch] = useContext(SearchQueryStore);

	function filterRefs(references: Array<iReference>): Array<iReference> {
		if (searchQueries.length === 0) return refs;
		const refIndexes: Array<Record<string, string>> = references.map((ref: iReference) => { 
			return {
				refId: ref.id as string,
				index: [ref.title, ref.publisher, ref.authors, ref.url].join(', ')
			}
		});
		const matQuery = new RegExp(`(?=.*${searchQueries.join(')(?=.*')})`);
		return refIndexes
			.filter((ref: Record<string, string>) => ref.index.toLowerCase().match(matQuery))
			.map((ref: Record<string, string>) => refs.find((reference: iReference) => ref.refId === reference.id)) as Array<iReference>;
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

