import { registerPlugin } from '@capacitor/core';


export interface IPermissionStatus {
  granted: boolean;
}

export interface ICallHistory {
  phoneNumber: string;
  type: string;
  date: string;
  duration: string;
}

interface ICallHistoryPlugin {
  getPermissions(): Promise<IPermissionStatus>;
  getCallHistory(): Promise<{ call_log: ICallHistory[] }>;

}

export const CallLog = registerPlugin<ICallHistoryPlugin>('CallHistory');



