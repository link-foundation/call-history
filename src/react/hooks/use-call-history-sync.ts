import { useEffect } from "react"
import { DeepClient } from "@deep-foundation/deeplinks/imports/client.js"
import { saveAllCallHistory } from "../../saveAllCallHistory.js"

export function useCallHistorySync(options: UseCallHistorySyncOptions) {
  const {intervalInMs = 60*1000, deep, containerLinkId} = options
  useEffect(() => {
    const interval = setInterval(() => {
      saveAllCallHistory({deep, containerLinkId})
    }, intervalInMs)
    return () => {
      clearInterval(interval)
    }
  })
}

export interface UseCallHistorySyncOptions {
  deep: DeepClient;
  containerLinkId: number;
  intervalInMs?: number
}