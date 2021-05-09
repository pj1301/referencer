import { ReducerDispatch } from '../../models/reducer-action.interface';
import { Reference } from '../../models/reference.interface';
import { NEW_REFERENCE } from './types';

export function createNewReference(reference: Reference, dispatch: any): void {
	dispatch({ type: NEW_REFERENCE, payload: reference });
}

export function getReferences(dispatch: any): void {

}

export function deleteReference(id: string, dispatch: any): void {}

export function updateReference(reference: Reference, dispatch: any): void {}
