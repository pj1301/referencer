import { createContext } from 'react';

const initialContext = { references: [] };
export const ReferencesContext = createContext(initialContext);