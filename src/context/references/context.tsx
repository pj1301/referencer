import React, { createContext, Dispatch, useReducer } from 'react';
import { FunctionComponent } from 'react';
import { iReducerDispatch } from '../../models/reducer-action.interface';
import { iReference } from '../../models/reference.interface';
import { initialState, reducer } from './reducer';

const ReferenceStore = createContext<[Array<iReference>, Dispatch<iReducerDispatch<iReference>>]>(null!);

const ReferencesProvider = ({ children }: JSX.ElementChildrenAttribute): JSX.Element => {
    const [referenceStore, referenceDispatch] = useReducer(reducer, initialState);
    
    return(
        <ReferenceStore.Provider value={[referenceStore, referenceDispatch]}>
            {children}
        </ReferenceStore.Provider>
    )
}

export { ReferenceStore, ReferencesProvider };
