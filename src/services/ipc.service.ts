import { iContextBridge } from '../models/context-bridge.interface';

const {
	electronIpcOn,
	electronIpcOnce,
	electronIpcRemoveAllListeners,
	electronIpcRemoveListener,
	electronIpcSend,
	electronIpcSendSync
} = window.api as iContextBridge;

export function initIPC() {
	console.log('Initialising IPC...');
	electronIpcOnce('toMain', (event, args) => {
		console.log('connection established');
	});
}