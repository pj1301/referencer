import React, { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

const ReferencesContext = createContext(initialState);

const ReferencesProvider = (props: any) => {
    const [references, referenceDispatch] = useReducer(reducer, initialState);
    
    return(
        <ReferencesContext.Provider value={{references, referenceDispatch}}>
            {props.children}
        </ReferencesContext.Provider>
    )
}

export { ReferencesContext, ReferencesProvider }
