import { ipcMain, IpcMain } from 'electron';

export class IPCController {
	private ipcMain!: IpcMain;

	constructor() {
		this.ipcMain = ipcMain;
	}

	public init(): void {
		this.ipcMain.on('toMain', (event, ...args) => {
			console.log({event, args});
		})
	}
}
