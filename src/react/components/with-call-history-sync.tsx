import { UseCallHistorySyncOptions, useCallHistorySync } from "../hooks/use-call-history-sync.js";

export function WithCallHistorySync(options: WithCallHistorySyncOptions) {
  useCallHistorySync(options)
  return options.children ?? null
}

export interface WithCallHistorySyncOptions extends UseCallHistorySyncOptions {
  children?: JSX.Element
}