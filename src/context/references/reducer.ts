import { iLog } from '../../models/log.model';
import { iReducerDispatch } from '../../models/reducer-action.interface';
import { iReference } from '../../models/reference.interface';
import { iStore } from '../../models/store.interfaces';
import { iDispatchActionTypes } from '../types.enum';

const { FETCH, CREATE_ONE, UPDATE_ONE, DELETE_ONE } = iDispatchActionTypes;
const initialState: iStore<iReference> = { data: [], logs: [] };

const reducer = (state = initialState, action: iReducerDispatch<iReference>): iStore<iReference>  => {
	const log: iLog = {
		action: action.type,
		resource: Array.isArray(action.payload) ? action.payload.map((i: iReference) => i.id).join(', ') : typeof action.payload === 'string' ? action.payload : action.payload.id,
		timestamp: new Date().toISOString()
	};

    switch(action.type) {
        case FETCH:
            return {
                ...state,
				data: (action.payload as Array<iReference>),
				logs: [...state.logs, log]
            };
        case CREATE_ONE:
            return {
                ...state,
                data: [
                    ...(state.data as Array<iReference>),
                    (action.payload as iReference)
                ],
				logs: [...state.logs, log]
            };
        case DELETE_ONE:
            return {
                ...state,
                data: state.data.filter((ref: iReference) => ref.id !== action.payload),
				logs: [...state.logs, log]
            };
        case UPDATE_ONE:
            return {
                ...state,
                data: state.data.map((ref: iReference) => {
                    const data = (action.payload as iReference);
                    if (ref.id === data.id) return data;
                    return ref;
                }),
				logs: [...state.logs, log]
			};
        default:
            return state;
    }
}

export { initialState, reducer };
