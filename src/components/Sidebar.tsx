import React, { FunctionComponent, useContext } from 'react';
import { SearchQueryStore } from '../context/search/context';
import { MdClear } from 'react-icons/md';
import { deleteItem } from '../context/actions';

const Sidebar: FunctionComponent = () => {
	const [query, queryDispatch] = useContext(SearchQueryStore);

	return (
		<div id="sidebar">
			<div className="tag-wrap">
				{query.map((term: string, i: number) => {
					return(
						<div key={i} className="search-option">
							<span className="search-option-text">
								{term}
							</span>
							<i
								className="remove-tag"
								onClick={() => deleteItem(term, queryDispatch)}
								>
								<MdClear />
							</i>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Sidebar;
