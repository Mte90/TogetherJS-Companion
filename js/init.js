function injectTogetherjs(tabId) {
  browser.tabs.executeScript(tabId, {
	file: 'js/inject.js'
  });
}
function onCreated(n) {
  if (browser.runtime.lastError) {
	console.log(`Error: ${browser.runtime.lastError}`);
  }
}

browser.contextMenus.create({
  id: "add-togetherjs",
  title: 'Use TogetherJS',
  contexts: ["all"]
}, onCreated);

browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === 'add-togetherjs') {
	injectTogetherjs(tab.id);
  }
});

