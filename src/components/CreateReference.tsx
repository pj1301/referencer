import React, { useContext, useState } from 'react'; 
import { ReferenceStore } from '../context/references/context';
import { iDispatchActionTypes } from '../context/types.enum';
import { iReference } from '../models/reference.interface';
import Input from './elements/Input';
import InputArea from './elements/InputArea';

const CreateReference = (): JSX.Element => {
    const [refState, refDispatch] = useContext(ReferenceStore);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [authors, setAuthors] = useState('');
    const [created, setCreated] = useState('');
    const [lastAccessed, setLastAccessed] = useState('');
    const [notes, setNotes] = useState('');
    const [publisher, setPublisher] = useState('');
    const [publicationMonth, setPublicationMonth] = useState('');
    const [publicationYear, setPublicationYear] = useState('');

    function createReference(): void {
        const dateNow = new Date().toISOString();
        setCreated(dateNow);
        setLastAccessed(dateNow);
        refDispatch({ type: iDispatchActionTypes.CREATE_ONE, payload: formatDataObject() as iReference });
    }

    function clearData(): void {
        setTitle('');
        setUrl('');
        setAuthors('');
        setCreated('');
        setLastAccessed('');
        setNotes('');
        setPublisher('');
        setPublicationMonth('');
        setPublicationYear('');
    }

    function formatDataObject(): object {
        return {
            title,
            url,
            authors,
            created,
            lastAccessed,
            notes,
            publisher,
            publicationMonth: parseInt(publicationMonth),
            publicationYear: parseInt(publicationYear)
        };
    }

    function validateDate(type: string, value: string): void {
        if (type === 'm' && value === '') {
            setPublicationMonth('');
            return
        }
        if (type === 'y' && value === '') {
            setPublicationYear('');
            return
        }
        const numberVal = parseInt(value);
        const currentYear = new Date().getFullYear();
        if (type === 'm' && (numberVal > 0 && numberVal <= 12)) {
            setPublicationMonth(value);
            return;
        }
        if (type === 'y' && (numberVal >= 1 && numberVal <= currentYear)) {
            setPublicationYear(value);
            return;
        }
    }

    return(
        <>
            <h1>Create Reference Component</h1>
            <div className="form-container">
                <Input type="text" changeFn={setTitle} placeholder="Enter title..." value={title} clear={true} />
                <Input type="text" changeFn={setUrl} placeholder="Enter URL..." value={url} clear={true} />
                <Input type="text" changeFn={setAuthors} placeholder="Enter author(s)..." value={authors} clear={true} />
                <Input type="text" changeFn={setPublisher} placeholder="Enter publisher name..." value={publisher} clear={true} />
                <div className="date-wrapper">
                    <Input type="number" changeFn={(val: string) => validateDate('m', val)} placeholder="Enter publication month..." value={publicationMonth} clear={false} />
                    <Input type="number" changeFn={(val: string) => validateDate('y', val)} placeholder="Enter publication year..." value={publicationYear} clear={false} />
                </div>
                <InputArea changeFn={setNotes} placeholder="Enter notes..." value={notes} clear={true} />
            </div>
            <div className="btn-wrap">
                <button onClick={createReference} className="btn btn-primary">CREATE</button>
                <button onClick={clearData} className="btn btn-secondary">CLEAR</button>
            </div>
        </>
    )
}

export default CreateReference;