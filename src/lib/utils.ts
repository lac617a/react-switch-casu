import { ReactNode } from "react";

export const generateUuid = (): string =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    /* eslint-disable */
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

export const pushItemsToArray = (
  existingArray: ReactNode[] | undefined,
  newItems: []
) => {
  if (Array.isArray(newItems)) {
    return [...existingArray as ReactNode[], ...newItems];
  }
  if (newItems) {
    return [...existingArray as ReactNode[], newItems];
  }
};
