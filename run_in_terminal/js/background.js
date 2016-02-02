var port = null;
host_name = "org.deepin.terminal";
selection_handle = function(info, tab){
    selection_text = info.selectionText;
    console.log(selection_text);
    if (!port){
        connect();
    }
    port.postMessage({"text": selection_text});
    //port.disconnect();
    port = null;
}

connect = function(){
    port = chrome.runtime.connectNative(host_name);
    port.onDisconnect.addListener(onDisconnected);
}

onDisconnected = function() {
    console.log("disconnect");
    port = null;
}

chrome.contextMenus.create({
    title: "run in terminal",
    contexts: ["selection"],
    type: "normal",
    onclick: selection_handle
});

