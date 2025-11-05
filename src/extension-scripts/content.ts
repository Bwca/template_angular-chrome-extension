// Content script for Chrome Extension

console.log('Content script loaded');

// Listen for messages from background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Handle your messages here
  console.log('Content received:', request);

  return true;
});

// Add your content script logic here
