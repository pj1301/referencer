import { iLog } from './log.model';

export interface iStore<T> {
    data: Array<T>;
	logs: Array<iLog>;
}
