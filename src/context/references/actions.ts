import { iReducerDispatch } from '../../models/reducer-action.interface';
import { iReference } from '../../models/reference.interface';
import { iDispatchActionTypes } from '../types.enum';

export function createNewReference(reference: iReference, dispatch: any): void {
	dispatch({ type: iDispatchActionTypes.CREATE_ONE, payload: reference });
}

export function getReferences(dispatch: any): void {

}

export function deleteReference(id: string, dispatch: any): void {}

export function updateReference(reference: iReference, dispatch: any): void {}
