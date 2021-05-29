import { iLog } from "../../models/log.model";
import { iReducerDispatch } from "../../models/reducer-action.interface";
import { iDispatchActionTypes } from "../types.enum";

const { FETCH, CREATE_ONE, DELETE_ONE } = iDispatchActionTypes;
const initialState: Array<iLog> = [];

const reducer = (state = initialState, action: iReducerDispatch<iLog>) => {

	switch(action.type) {
		case FETCH:
			return [...state, ...action.payload as Array<iLog>];
		case CREATE_ONE:
			return [...state, action.payload as iLog];
		case DELETE_ONE:
			return [...state.filter(item => item.id !== action.payload as string)];
		default:
			return state;
	}
}

export { initialState, reducer };
