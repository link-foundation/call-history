import { CallHistory } from "@capacitor-community/callHistory";

export async function checkPermissions() {
  return await CallHistory.checkPermissions();
}