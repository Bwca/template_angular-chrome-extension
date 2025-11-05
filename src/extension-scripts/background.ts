// Background script for Chrome Extension

console.log('Extension loaded');

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Handle your messages here
  console.log('Background received:', request);

  return true;
});
