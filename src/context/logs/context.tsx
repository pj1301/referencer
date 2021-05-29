import React, { createContext, Dispatch, useReducer } from 'react';
import { iLog } from '../../models/log.model';
import { iReducerDispatch } from '../../models/reducer-action.interface';
import { initialState, reducer } from './reducer'

const LogStore = createContext<[Array<iLog>, Dispatch<iReducerDispatch<iLog>>]>(null!);

const LogsProvider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
	const [logStore, logDispatch] = useReducer(reducer, initialState);

	return(
		<LogStore.Provider value={[logStore, logDispatch]}>
			{children}
		</LogStore.Provider>
	)
}

export { LogStore, LogsProvider };
