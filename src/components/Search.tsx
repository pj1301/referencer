import React, { FunctionComponent, useState } from 'react';
import { useContext } from 'react';
import { MdClear } from 'react-icons/md';
import { updateItem } from '../context/actions';
import { SearchQueryStore } from '../context/search/context';
import Rif from './conditional-renderer/Rif';

const Search: FunctionComponent = () => {
	const [query, setQuery] = useState('');
	const [search, searchDispatch] = useContext(SearchQueryStore);

	function updateQuery(event: React.ChangeEvent): void {
		setQuery((event.target as HTMLInputElement).value);
	}

	function updateSearch(event: React.KeyboardEvent): void {
		if (event.key === 'Enter' && query.length > 0) {
			updateItem<string>(query.trim(), searchDispatch);
			setQuery('');
		}
	}

	return (
		<div id="Search">
			<input
				type="text"
				onChange={(e: React.ChangeEvent) => updateQuery(e)}
				value={query}
				onKeyPress={updateSearch}
			/>
			<Rif condition={query.length > 0}>
				<MdClear className="clear-input" onClick={() => setQuery('')} />
			</Rif>
		</div>
	)
}

export default Search;
