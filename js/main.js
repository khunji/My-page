//검색창에 단어를 검색해서 다른 html 파일을 불러오는 기능
const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-button");

function handleClick(){
    const searchResult = searchInput.value.toLowerCase(); //검색창에 입력한 값을 소문자로 변환

    if(searchResult.includes("todo")){
        window.location.href = "todo.html";
    } else if (searchResult.includes("quote")) {
        window.location.href = "quotes.html";
    } else if(searchResult.includes("sites")) {
        window.location.href = "favorites.html";
    } else{
        alert("해당 기능이 없습니다.");
    }

};

function handleEnter(event){
    if(event.key === "Enter"){
        event.preventDefault();
        handleClick();
    }
}


function handleIcon(event) {
    const target = event.currentTarget; //event.target으로 하면 예를 들어 icon1을 클릭하면 event.target은 이벤트리스터가 걸린 <i class~이다. event.currentTarget은 지금 이벤트 리스터가 걸린 요소이다.(<div class="icon1")

    if(target.classList.contains("icon1")) {
        window.location.href = "todo.html";
    } else if (target.classList.contains("icon2")) {
        window.location.href = "quotes.html";
    } else if(target.classList.contains("icon3")) {
        window.location.href = "favorites.html";
    }
}

searchBtn.addEventListener("click", handleClick);
searchBtn.addEventListener("keydown", handleEnter);

//아이콘을 클릭해서 html파일 불러오는 기능
//클릭한 아이콘의 id가 다르니 if,else if문 이용
const i1 = document.querySelector(".icon1");
const i2 = document.querySelector(".icon2");
const i3 = document.querySelector(".icon3");

i1.addEventListener("click", handleIcon);
i2.addEventListener("click",handleIcon);
i3.addEventListener("click",handleIcon);


//날씨 정보를 <Header>에 추가시키기
const API_KEY = "3e9e1234f1b64f5bfb8546d8bb3c13c9";
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//오류가 발생했을 때 실행할 코드
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

//정상적으로 작동했을 때 실행할 코드
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    getWeather();

    async function getWeather() {
        const res = await fetch(url); //해당 url로 데이터를 요청, 그런데 이것은 비동기 따라서 응답이 올 때까지 다른 코드 실행, 응답이 오면 res에 저장
        const data = await res.json(); //res를 json형태로 data에 저장
        
        const weather = document.querySelector("#weather p:first-child");
        const city = document.querySelector("#weather p:last-child");

        city.innerText = data.name; //console.log(data)를 통해서 콘솔 창 보면서 얻기
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`; //console.log(data)를 통해서 콘솔 창 보면서 얻기
    }

}


//시계 기능 추가(년도,월,일,시간,분,초)
const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth()+1);
    const dates = String(date.getDate());
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${year} : ${month} : ${dates} : ${hours} : ${minutes} : ${seconds}`;
    
}
getClock();
setInterval(getClock,1000);


