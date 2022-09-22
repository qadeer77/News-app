if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}

function showNotification() {
    Notification.requestPermission((result) => {
        if (result === "granted") {
            navigator.serviceWorker.ready.then((registration) => {
                registration.showNotification("News Notification", {
                    body: "Notification from News Website",
                    icon: "./images/logo1.png",
                    vibrate: [200, 100, 200, 100, 200, 100, 200],
                    tag: "vibration-sample",
                });
            });
        }
    });
}

showNotification();







// variables
let general = document.querySelector("#General");
let sport = document.querySelector("#Sport");
let tecnology = document.querySelector("#Tecnology");
let entertainment = document.querySelector("#Entertainment");
let bussines = document.querySelector("#Bussines");
let health = document.querySelector("#Health");
let science = document.querySelector("#Science");
let searchBtn = document.querySelector("#searchBtn");
let newsQuery = document.querySelector("#newsQuery");
let dataRandering = document.querySelector("#dataRandering");
let form = document.querySelector("form");
let everything = document.querySelector("#everything");

// Array
var newsDataArray = [];

// api
const apiKey = "7d1e172f89824a91bb1f661783e2f044";
const headlineNews = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const generalNews = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=";
const bussinesNews = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="
const sportNews = "https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey="
const tecnologyNews = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey="
const entertainmentNews = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey="
const helathNews = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey="
const scienceNews = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey="
const serachNews = "https://newsapi.org/v2/everything?q=bitcoin&apiKey="


// Events
window.addEventListener("load", () => {
    fetchHeadLinesNews();
})


general.addEventListener("click", () => {
    fetchGeneralNews();
})

sport.addEventListener("click", () => {
    fetchSportNews();
})

tecnology.addEventListener("click", () => {
    fetchtecnologyNews();
})

entertainment.addEventListener("click", () => {
    fetchEntertainmentNews();
})

bussines.addEventListener("click", () => {
    fetchBussinessNews();
})

health.addEventListener("click", () => {
    fetchHealthNews();
})

science.addEventListener("click", () => {
    fetchScienceNews();
})

everything.addEventListener("click", () => {
    fetchEverythingNews();
})



const fetchGeneralNews = async () => {
    const response = await fetch(generalNews + apiKey);
    newsDataArray = [];
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    newsDispaly();
}

const fetchSportNews = async () => {
    const response = await fetch(sportNews + apiKey);
    newsDataArray = [];
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    newsDispaly();
}

const fetchtecnologyNews = async () => {
    const response = await fetch(tecnologyNews + apiKey);
    newsDataArray = [];
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    newsDispaly();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(entertainmentNews + apiKey);
    newsDataArray = [];
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    newsDispaly();
}

const fetchBussinessNews = async () => {
    const response = await fetch(bussinesNews + apiKey);
    newsDataArray = [];
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    newsDispaly();
}

const fetchHealthNews = async () => {
    const response = await fetch(helathNews + apiKey);
    newsDataArray = [];
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    newsDispaly();
}

const fetchScienceNews = async () => {
    const response = await fetch(scienceNews + apiKey);
    newsDataArray = [];
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    newsDispaly();
}

const fetchHeadLinesNews = async () => {
    const response = await fetch(headlineNews + apiKey);
    newsDataArray = [];
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    newsDispaly();
}

const fetchEverythingNews = async () => {
    const response = await fetch(serachNews + apiKey);
    newsDataArray = [];
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    newsDispaly();
}


function newsDispaly() {
    let html = `<div class="row" id="row1">`

    newsDataArray.forEach(element => {
        html += `
        <div class="col-3" id="col1">
            <div>
            <img id="image1" src="${element["urlToImage"]}" height="300px" width="300px" >
            </div>
            <div>
                <h6 id="head6">${element["title"]}</h6>
            </div>
            <div>
                <p id="para1" class="text-primary">${element["publishedAt"]}</p>            
            </div>
            <div>
            <p id="para2">${element["description"]}</p>            
          </div>
         <div>
            <a href="${element.url}" target="_blank"><button type="button" class="btn btn-primary">Read More</button></a>
          </div>
        </div>
        `
    })

    dataRandering.innerHTML = html;
}