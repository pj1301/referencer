import { ipcRenderer, contextBridge } from 'electron';

const validChannels = {
	send: ['toMain'],
	receive: ['fromMain']
};

const contextBridgeOptions = {
	send: (channel: string, data: any) => {
		if (validChannels.send.includes(channel)) 
			ipcRenderer.send(channel, data);
	},
	receive: (channel: string, fn: Function) => {
		if (validChannels.receive.includes(channel)) 
			ipcRenderer.on(channel, (event, ...args) => fn(args));
	}
};

contextBridge.exposeInMainWorld('api', contextBridgeOptions);