async function importData() {
    console.log('hello');
    try {
        const res = await fetch("latest.csv");
        const data = await res.text();
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            console.log(data)
            navigator.clipboard.writeText(data).then(() => {
                chrome.tabs.sendMessage(tabs[0].id, { action: "pasteData", data: data }, function(response) {
                    if (chrome.runtime.lastError) {
                        console.error(chrome.runtime.lastError.message);
                    }
                });            
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    } catch (error) {
        alert('error')
        alert(error)
        console.error('Error fetching the CSV file:', error);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('importButton').addEventListener('click', importData);
});
