import React, { FunctionComponent } from 'react';
import { months } from '../models/months';
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
			<p>Authors: {reference.authors}</p>
			<p>URL: {reference.url}</p>
			<p>Publisher: {reference.publisher}</p>
			<div className="grid">
				<p>Publication Month: {months[reference.publicationMonth - 1]}</p>
				<p>Publication Year: {reference.publicationYear}</p>
				<p>Created: {new Date(reference.created).toDateString()}</p>
			</div>
			<div className="button-wrap">
				<button onClick={() => edit(reference.id as string)}>Edit</button>
				<button onClick={() => remove(reference.id as string)}>Delete</button>
			</div>
		</div>
	)
}

export default Reference;
