document.querySelectorAll(".icon").forEach(icon => {
    icon.addEventListener("click",() => {
        window.location.href = icon.dataset.link;
    });
});// 아이콘을 클릭했을 때 사이트 각 기능의 html 파일 열어서 실행 시킴


function controlEnter() {
    const result = document.getElementById("search-input").value.toLowerCase();

    if (result.includes("todo")) { //Javascript의 includes 메서드(배열이나 문자열 안에 특정한 값을 포함하는지)
        window.location.href = "todo.html";
    }else if (result.includes("명언") || result.includes("quote")) {
        window.location.href = "quotes.html";
    }else if (result.includes("사이트") || result.includes("favorite")) {
        window.location.href = "favorites.html";
    } else {
        alert("해당 기능이 없습니다.")
    }
};

document.querySelector("#search-button").addEventListener("click", (controlEnter)); //그냥 검색 버튼을 클릭했을 때는 controlEnter키로 해결

document.querySelector("#search-input").addEventListener("keydown",(event) => {
    if (event.key == "Enter") {
        event.preventDefault();
        controlEnter();

    }
});

