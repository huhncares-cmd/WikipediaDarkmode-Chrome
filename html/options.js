var submitLanguage = document.querySelector("#submitLanguage");

function changeDefaultLanguage(){
    localStorage.setItem("language", document.querySelector("#language").value);
    var value = document.querySelector("#language").value;
    var notifOptions = {
        type: "basic",
        iconUrl: "../img/48.png",
        title: "Default Language changed",
        message: "Your default language is now: " + value
    };
   
    chrome.notifications.create('resetNotif', notifOptions);
}

if(localStorage.getItem("language") == "" || localStorage.getItem("language") == null || localStorage.getItem("language") == undefined || localStorage.getItem("language") == 0){
    document.getElementById("message").innerHTML = "en";
} else {
    document.getElementById("message").innerHTML = localStorage.getItem("language");
}

submitLanguage.addEventListener("click", changeDefaultLanguage);