import { Dispatch } from 'react';
import { iReducerDispatch } from '../models/reducer-action.interface';
import { iDispatchActionTypes } from './types.enum';
import getReferenceData from '../tmp/reference-data';

type ItemDispatch<T> = Dispatch<iReducerDispatch<T>>;

export function createItem<T>(item: T, dispatch: ItemDispatch<T>): void {
	// api call
	dispatch({ type: iDispatchActionTypes.CREATE_ONE, payload: item });
}

export function fetchItems<T>(dispatch: ItemDispatch<T>): void {
	// api call
	const data: Array<T> = getReferenceData() as any
	dispatch({ type: iDispatchActionTypes.FETCH, payload: data });
}

export function deleteItem<T>(id: string, dispatch: ItemDispatch<T>): void {
	// api call
	dispatch({ type: iDispatchActionTypes.DELETE_ONE, payload: id });
}

export function updateItem<T>(item: T, dispatch: ItemDispatch<T>): void {
	// api call
	dispatch({ type: iDispatchActionTypes.UPDATE_ONE, payload: item });
}
