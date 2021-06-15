import React, { createContext, Dispatch } from 'react';
import { useReducer } from 'react';
import { iReducerDispatch } from '../../models/reducer-action.interface';
import reducer from './reducer';

const SearchQueryStore = createContext<[Array<string>, Dispatch<iReducerDispatch<string>>]>(null!);

const SearchQueryProvider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
	const [query, queryDispatch] = useReducer(reducer, []);

	return(
		<SearchQueryStore.Provider value={[query, queryDispatch]}>
			{ children }
		</SearchQueryStore.Provider>
	)
}

export { SearchQueryStore, SearchQueryProvider };
