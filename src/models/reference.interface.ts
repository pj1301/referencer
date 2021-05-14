import { iBaseRecordProperties } from "./base-record.interface";

export interface iReference extends iBaseRecordProperties {
	title: string;
	url: string;
	authors: string;
	publisher: string;
	publicationMonth: number;
	publicationYear: number;
	notes: string;
}