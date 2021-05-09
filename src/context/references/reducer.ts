import { ReducerDispatch } from '../../models/reducer-action.interface';
import { Reference } from '../../models/reference.interface';
import { DELETE_REFERENCE, NEW_REFERENCE, UPDATE_REFERENCE, LOAD_REFERENCES } from './types';

const initialState = { references: [] };

export default (state = initialState, action: ReducerDispatch<Reference> ) => {
    switch(action.type) {
        case LOAD_REFERENCES:
            return { ...state, references: action.payload };
        case NEW_REFERENCE:
            return { ...state, references: [...state.references, action.payload] };
        case DELETE_REFERENCE:
            return { ...state, references: state.references.filter((ref: Reference) => ref.id !== action.payload.id) };
        case UPDATE_REFERENCE:
            return {
                ...state,
                references: state.references.map((ref: Reference) => {
                    if (ref.id === action.payload.id) return action.payload;
                    return ref;
                }
            )};
        default:
            return state;
    }
}
