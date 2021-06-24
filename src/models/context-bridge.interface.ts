export interface iContextBridge {
	electronIpcSend: (channel: string, ...args: any) => void;
	electronIpcSendSync: (channel: string, ...args: any) => void;
	electronIpcOn: (channel: string, listener: (event: any, ...args: any) => void) => void;
	electronIpcOnce: (channel: string, listener: (event: any, ...args: any) => void) => void;
	electronIpcRemoveListener:  (channel: string, listener: (event: any, ...args: any) => void) => void;
	electronIpcRemoveAllListeners: (channel: string) => void;
}
