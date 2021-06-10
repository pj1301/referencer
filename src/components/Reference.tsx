import React, { FunctionComponent } from 'react';
import { iReference } from '../models/reference.interface';

interface iReferenceComponentProps {
	reference: iReference;
	edit: (id: string) => void;
	remove: (id: string) => void;
}

const Reference: FunctionComponent<iReferenceComponentProps> = ({ reference, edit, remove }) => {

	return(
		<div className="reference-body">
			<h1>{reference.title}</h1>
			<p>{reference.authors}</p>
			<button onClick={() => edit(reference.id as string)}>Edit</button>
			<button onClick={() => remove(reference.id as string)}>Delete</button>
		</div>
	)
}

export default Reference;
