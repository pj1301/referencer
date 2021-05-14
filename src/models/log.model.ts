import { iBaseRecordProperties } from "./base-record.interface";

export interface iLog extends iBaseRecordProperties {
	action: string;
	resource: string;
}

export class Log<T extends iBaseRecordProperties> implements iLog {
	public id: string;
	public action: string;
	public resource: string;
	public timestamp: string;

	constructor(action: string, resource: Array<T>|T|string) {
		this.id = '';
		this.action = action;
		this.resource = this.calculateResource(resource),
		this.timestamp = new Date().toISOString();
	}

	private calculateResource(resource: Array<T>|T|string): string {
		if (typeof resource === 'string') return resource;
		if (Array.isArray(resource)) return resource.map((item: T) => item.id).join(', ');
		return resource.id;
	}
}