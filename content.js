chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "pasteData") {
        //chrome.runtime.sendMessage({type: "getAuthToken"}, function(response) {
//             alert(response.token);
//             console.log(chrome.identity)
        // Copiar el texto al portapapeles        
        // window.focus()
        console.log('copiando')
            
            document.execCommand('paste')
        
            sendResponse({ message: "Data pasted" });
    }
});
