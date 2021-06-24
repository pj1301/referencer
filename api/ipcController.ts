import { ipcMain, IpcMain } from 'electron';

export class IPCController {
	private ipcMain!: IpcMain;

	constructor() {
		this.ipcMain = ipcMain;
	}

	public init(): void {
		console.log('Initialising the IPC controller');
		this.ipcMain.on('toMain', (event, ...args) => {
			console.log({event, args});
		})
	}
}
