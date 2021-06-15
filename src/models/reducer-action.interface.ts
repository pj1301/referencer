import { iDispatchActionTypes } from '../context/types.enum';

export interface iReducerDispatch<T> {
	type: iDispatchActionTypes,
	payload: Array<T> | T | Array<string> | string
}