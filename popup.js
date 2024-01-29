// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(message) {
    const costs = message.additionalCosts;
    displayCosts(costs);
  });
  
  function displayCosts(costs) {
    const costsList = document.getElementById("costs");
    costs.forEach(cost => {
      const listItem = document.createElement("li");
      listItem.textContent = cost;
      costsList.appendChild(listItem);
    });
  }