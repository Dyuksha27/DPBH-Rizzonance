// Find additional costs on the page
const additionalCosts = findAdditionalCosts();

// Send the results to the popup UI
chrome.runtime.sendMessage({ additionalCosts });

function findAdditionalCosts() {
  // Implement your cost-finding logic here
  // For example, you might search for elements with certain classes or IDs
  // and extract their text content to find costs
}