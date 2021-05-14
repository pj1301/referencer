export interface iReducerDispatch<T> {
	type: string,
	payload: Array<T> | T | string
}