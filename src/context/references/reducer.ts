import { iReducerDispatch } from '../../models/reducer-action.interface';
import { iReference } from '../../models/reference.interface';
import { iStore } from '../../models/store.interfaces';
import { iDispatchActionTypes } from '../types.enum';

const { FETCH, CREATE_ONE, UPDATE_ONE, DELETE_ONE } = iDispatchActionTypes;
const initialState: iStore<iReference> = { data: [] };

const reducer = (state = initialState, action: iReducerDispatch<iReference>): iStore<iReference>  => {
    switch(action.type) {
        case FETCH:
            return {
                ...state, data: (action.payload as Array<iReference>)
            };
        case CREATE_ONE:
            return {
                ...state,
                data: [
                    ...(state.data as Array<iReference>),
                    (action.payload as iReference)
                ]
            };
        case DELETE_ONE:
            return {
                ...state,
                data: state.data.filter((ref: iReference) => ref.id !== action.payload)
            };
        case UPDATE_ONE:
            return {
                ...state,
                data: state.data.map((ref: iReference) => {
                    const data = (action.payload as iReference);
                    if (ref.id === data.id) return data;
                    return ref;
                }
            )};
        default:
            return state;
    }
}

export { initialState, reducer };
