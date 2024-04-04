var keySequence = "LL RR LL RR LR LR LR LR";

var keyMap = {
  L: {
    keyCode: 37,
    which: 37,
    key: "ArrowLeft",
    code: "ArrowLeft",
  },
  R: {
    keyCode: 39,
    which: 39,
    key: "ArrowRight",
    code: "ArrowRight",
  },
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'clicked') {
    keys = keySequence.replace(/\s/g, '').split("");

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var event = new KeyboardEvent('keydown', keyMap[key]);
      window.dispatchEvent(event);
    }
  }
});