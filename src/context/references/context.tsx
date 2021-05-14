import React, { createContext, Dispatch, useReducer } from 'react';
import { iReducerDispatch } from '../../models/reducer-action.interface';
import { iReference } from '../../models/reference.interface';
import { iStore } from '../../models/store.interfaces';
import { initialState, reducer } from './reducer';

const ReferenceStore = createContext<[iStore<iReference>, Dispatch<iReducerDispatch<iReference>>]>(null!);

const ReferencesProvider = ({ children }: JSX.ElementChildrenAttribute) => {
    const [referenceStore, referenceDispatch] = useReducer(reducer, initialState);
    
    return(
        <ReferenceStore.Provider value={[referenceStore, referenceDispatch]}>
            {children}
        </ReferenceStore.Provider>
    )
}

export { ReferenceStore, ReferencesProvider }
