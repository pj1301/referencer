import { app, App, BrowserWindow, Session, BrowserWindowConstructorOptions } from 'electron';

class Main {
	private app: App;
	private defaultWindowOpt: BrowserWindowConstructorOptions = { width: 800, height: 600 };
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
	}
}

(() => new Main())();
