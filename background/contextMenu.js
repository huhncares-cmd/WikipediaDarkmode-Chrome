var contextMenuItem = {
    "id": "search",
    "title": "Search Wikipedia",
    "contexts": [
        "selection"
    ],
};
chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "search" && clickData.selectionText){
        if(localStorage.getItem("language") == "" || localStorage.getItem("language") == null || localStorage.getItem("language") == undefined || localStorage.getItem("language") == 0){
            window.open("https://en.wikipedia.org/wiki/Special:Search?search=" + clickData.selectionText);
        } else {
            window.open("https://" + localStorage.getItem("language") + ".wikipedia.org/wiki/Special:Search?search=" + clickData.selectionText);
        }
    }
});