export interface ReducerDispatch<T> {
	type: string,
	payload: Array<T> | T | string
}