// variables
let general = document.querySelector("#General");
let sport = document.querySelector("#Sport");
let tecnology = document.querySelector("#Tecnology");
let entertainment = document.querySelector("#Entertainment");
let bussines = document.querySelector("#Bussines");
let health = document.querySelector("#Health");
let science = document.querySelector("#Science");
// let searchBtn = document.querySelector("#searchBtn");
let newsQuery = document.querySelector("#newsQuery");
let dataRandering = document.querySelector("#dataRandering");
let form = document.querySelector("form");

// Array
var newsDataArray = [];

// api
const apiKey = "43fd07be505e4affa0b8ad0a3f3c9035";
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

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(newsQuery.value)
    newsQuery.value = "";
})



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

// searchBtn.addEventListener("click", () => {
//     fetchSerachNews();
// })


const fetchGeneralNews = async () => {
    const response = await fetch(generalNews + apiKey);
    newsDataArray = [];
    // if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    // console.log(newsDataArray)
    // } else {

    // }
    newsDispaly();
}

const fetchSportNews = async () => {
    const response = await fetch(sportNews + apiKey);
    newsDataArray = [];
    // if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    // console.log(newsDataArray)
    // } else {

    // }
    newsDispaly();
}

const fetchtecnologyNews = async () => {
    const response = await fetch(tecnologyNews + apiKey);
    newsDataArray = [];
    // if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    // console.log(newsDataArray)
    // } else {

    // }
    newsDispaly();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(entertainmentNews + apiKey);
    newsDataArray = [];
    // if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    // console.log(newsDataArray)
    // } else {

    // }
    newsDispaly();
}

const fetchBussinessNews = async () => {
    const response = await fetch(bussinesNews + apiKey);
    newsDataArray = [];
    // if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    // console.log(newsDataArray)
    // } else {

    // }
    newsDispaly();
}

const fetchHealthNews = async () => {
    const response = await fetch(helathNews + apiKey);
    newsDataArray = [];
    // if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    // console.log(newsDataArray)
    // } else {

    // }
    newsDispaly();
}

const fetchScienceNews = async () => {
    const response = await fetch(scienceNews + apiKey);
    newsDataArray = [];
    // if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    // console.log(newsDataArray)
    // } else {

    // }
    newsDispaly();
}

const fetchHeadLinesNews = async () => {
    const response = await fetch(headlineNews + apiKey);
    newsDataArray = [];
    // if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    // console.log(newsDataArray)
    // } else {

    // }
    newsDispaly();
}

const fetchSerachNews = async () => {
    const response = await fetch(serachNews + apiKey);
    newsDataArray = [];
    // if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArray = myJson.articles;
    // console.log(newsDataArray)
    // } else {

    // }
    // newsDispaly();
}

console.log(fetchSerachNews())


function newsDispaly() {
    let html = `<div class="row" id="row1">`

    newsDataArray.forEach(element => {
        // console.log(element)
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