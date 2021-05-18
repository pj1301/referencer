import { iLog } from '../../models/log.model';
import { iReducerDispatch } from '../../models/reducer-action.interface';
import { iReference } from '../../models/reference.interface';
import { iStore } from '../../models/store.interfaces';
import { iDispatchActionTypes } from '../types.enum';

const { FETCH, CREATE_ONE, UPDATE_ONE, DELETE_ONE } = iDispatchActionTypes;
const initialState: Array<iReference> = [];

const reducer = (state = initialState, action: iReducerDispatch<iReference>): Array<iReference>  => {

    switch(action.type) {
        case FETCH:
            return [...state, ...(action.payload as Array<iReference>)]
        case CREATE_ONE:
            return [...state, (action.payload as iReference)];
        case DELETE_ONE:
            return [...state.filter((ref: iReference) => ref.id !== action.payload)]
        case UPDATE_ONE:
            return [...state.map((ref: iReference) => {
                    const data = (action.payload as iReference);
                    if (ref.id === data.id) return data;
                    return ref;
                })]
        default:
            return state;
    }
}

export { initialState, reducer };
