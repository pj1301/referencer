import { ipcRenderer, contextBridge } from 'electron';

const validChannels = {
	send: ['fromMain'],
	receive: ['toMain']
};

const contextBridgeOptions = {
    electronIpcSend: (channel: string, ...args: any) => {
		console.log({ channel, args });
		if (!validChannels.send.includes(channel)) return;
		ipcRenderer.send(channel, args);
	},

	electronIpcSendSync: (channel: string, ...args: any) => {
		console.log({ channel, args });
		if (!validChannels.send.includes(channel)) return;
		return ipcRenderer.sendSync(channel, args);
	},

	electronIpcOn: (channel: string, listener: (event: any, ...args: any) => void) => {
		console.log({ channel, listener });
		if (!validChannels.receive.includes(channel)) return;
		ipcRenderer.on(channel, listener);
	},

	electronIpcOnce: (channel: string, listener: (event: any, ...args: any) => void) => {
		console.log({ channel, listener });
		if (!validChannels.receive.includes(channel)) return;
		ipcRenderer.once(channel, listener);
	},

	electronIpcRemoveListener:  (channel: string, listener: (event: any, ...args: any) => void) => {
		console.log({ channel, listener });
		ipcRenderer.removeListener(channel, listener);
	},

	electronIpcRemoveAllListeners: (channel: string) => {
		console.log({ channel });
		ipcRenderer.removeAllListeners(channel);
	}
  };

contextBridge.exposeInMainWorld('api', contextBridgeOptions);