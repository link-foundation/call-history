import { CallLog } from "./plugin.js";

export async function requestPermissions() {
  return await CallLog.getPermissions()
}