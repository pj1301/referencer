import { app, App, BrowserWindow, Session, BrowserWindowConstructorOptions, ipcMain, contextBridge, ipcRenderer } from 'electron';
import { IPCController } from './ipcController';

class Main {
	private app: App;
	private defaultWindowOpt: BrowserWindowConstructorOptions = {
        width: 800,
        height: 600,
        minWidth: 400,
        minHeight: 350,
		webPreferences: {
			nodeIntegration: false,
			worldSafeExecuteJavaScript: true,
			contextIsolation: true,
			preload: `${__dirname}/preload.ts`
		}
    };
	private mainWindow!: BrowserWindow;
	private secondaryWindows!: Array<BrowserWindow>;
	private session!: Session;

	constructor() {
		this.app = app;
		this.setListeners();
	}

	private createWindow(mainWindow: boolean, windowOptions?: BrowserWindowConstructorOptions): void {
		const newWindowOptions = windowOptions ?? this.defaultWindowOpt;
		let newWindow: BrowserWindow;
		if (mainWindow) {
			newWindow = new BrowserWindow(newWindowOptions);
			this.session = newWindow.webContents.session;
			newWindow.loadURL('http://localhost:3000');
			this.mainWindow = newWindow;
		} else {
			newWindow = new BrowserWindow(newWindowOptions);
			this.secondaryWindows.push(newWindow)
		}
		this.checkDevTools(newWindow);
	}

	private checkDevTools(window: BrowserWindow): void {
		process.env.NODE_ENV === 'development' && window.webContents.openDevTools();
	}

	private setListeners(): void {
		this.app
			.on('ready', () => this.createWindow(true))
			.on('window-all-closed', () => {
				if (process.platform !== 'darwin') this.app.quit();
			})
			.on('activate', () => {
				if (!this.mainWindow) this.createWindow(true);
			})
		
		new IPCController().init();
	}

	private initialiseIPC(): void {
		new IPCController().init();
	}
}

(() => new Main())();
