import { iReducerDispatch } from '../../models/reducer-action.interface';
import { iDispatchActionTypes } from '../types.enum';

const { UPDATE_ONE, DELETE_ONE, DELETE_MANY } = iDispatchActionTypes;
const initialState: Array<string> = [];

export default (state = initialState, action: iReducerDispatch<string>): Array<string> => {
	const query = action.payload as string;

	switch(action.type) {
		case UPDATE_ONE:
			return [...state, query];
		case DELETE_ONE:
			return state.filter((item: string) => item !== query);
		case DELETE_MANY:
			return state.filter((item: string) => !query.includes(item));
		default:
			return state;
	}
}