import { ReducerDispatch } from '../../models/reducer-action.interface';
import { Reference } from '../../models/reference.interface';
import { ReferenceState } from '../../models/state.interfaces';
import { DELETE_REFERENCE, NEW_REFERENCE, UPDATE_REFERENCE, LOAD_REFERENCES } from './types';

const initialState = { references: [] };

const reducer = (state = initialState, action: ReducerDispatch<Reference> )  => {
    switch(action.type) {
        case LOAD_REFERENCES:
            return {
                ...state,
                references: (action.payload as Array<Reference>)
            };
        case NEW_REFERENCE:
            return {
                ...state,
                references: [
                    ...(state.references as Array<Reference>),
                    (action.payload as Reference)
                ]
            };
        case DELETE_REFERENCE:
            return {
                ...state,
                references: state.references.filter((ref: Reference) => ref.id !== action.payload)
            };
        case UPDATE_REFERENCE:
            return {
                ...state,
                references: state.references.map((ref: Reference) => {
                    const data = (action.payload as Reference);
                    if (ref.id === data.id) return data;
                    return ref;
                }
            )};
        default:
            return state;
    }
}

export { initialState, reducer }
