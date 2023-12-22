import { DeepClient } from "@deep-foundation/deeplinks/imports/client.js";
import { CALL_HISTORY_PACKAGE_NAME } from './name.js';
import { CallLog } from './plugin.js';



export async function saveAllCallHistory({ deep, containerLinkId }: { deep: DeepClient; containerLinkId: number; }) {
  const containTypeLinkId = await deep.id("@deep-foundation/core", "Contain");
  const callTypeLinkId = await deep.id(CALL_HISTORY_PACKAGE_NAME, "Call");

  const res = await CallLog.getCallHistory();
  const insertData = res.call_log.map(call => ({
    type_id: callTypeLinkId,
    object: {
      data: {
        value: call
      }
    },
    in: {
      data: {
        type_id: containTypeLinkId,
        from_id: containerLinkId
      }
    }
  }));

  await deep.insert(insertData);
}
