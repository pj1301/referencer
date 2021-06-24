import { ipcRenderer, contextBridge } from "electron";

const validChannels = {
	send: ['toMain'],
	receive: ['fromMain']
};

const contextBridgeOptions = {
    electronIpcSend: (channel: string, ...arg: any) => {
		if (!validChannels.send.includes(channel)) return;
		ipcRenderer.send(channel, arg);
	},

	electronIpcSendSync: (channel: string, ...arg: any) => {
		if (!validChannels.send.includes(channel)) return;
		return ipcRenderer.sendSync(channel, arg);
	},

	electronIpcOn: (channel: string, listener: (event: any, ...arg: any) => void) => {
		if (!validChannels.receive.includes(channel)) return;
		ipcRenderer.on(channel, listener);
	},

	electronIpcOnce: (channel: string, listener: (event: any, ...arg: any) => void) => {
		if (!validChannels.receive.includes(channel)) return;
		ipcRenderer.once(channel, listener);
	},

	electronIpcRemoveListener:  (channel: string, listener: (event: any, ...arg: any) => void) => {
		ipcRenderer.removeListener(channel, listener);
	},

	electronIpcRemoveAllListeners: (channel: string) => {
		ipcRenderer.removeAllListeners(channel);
	}
  };

contextBridge.exposeInMainWorld('api', contextBridgeOptions);