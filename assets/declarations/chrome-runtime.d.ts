// chrome-runtime.d.ts
declare namespace chrome.runtime {
  // Declare the properties and methods you intend to use from chrome.runtime
  export const id: string;
  export const sendMessage: (
    message: any,
    callback?: (response: any) => void
  ) => void;

  // Declare the getURL method
  export function getURL(path: string): string;

  // Add more declarations as needed
}
