localStorage.setItem("userid", "admin"); //웹 브라우저의 로컬 스토리지에 아이디를 admin으로 설정했다. setItem:key,value추가가능
localStorage.setItem("userpassword", "1234"); //비밀번호는 1234

const form = document.querySelector("#login-form");
const IdInput = document.querySelector("#user-id");
const PwInput = document.querySelector("#user-password");
const BtnInput = document.querySelector("#login_button");

const alarm = document.querySelector("#alarm");


function handleClick(event){
    event.preventDefault();
    const savedId = localStorage.getItem("userid");
    const savedPassword = localStorage.getItem("userpassword");

   //로그인 성공시
   if (IdInput.value === savedId && PwInput.value === savedPassword) {
        alert("로그인 성공!!!");
        window.location.href="main.html"; //메인 페이지로 이동
    //로그인 실패시
   } else {
        alarm.innerText = "아이디 또는 비밀번호가 잘못되었습니다.";
        IdInput.value ="";
        PwInput.value ="";
        IdInput.focus();
   }
};

form.addEventListener("submit", function(event) {
    event.preventDefault();
    handleClick(event);
});
BtnInput.addEventListener("click",handleClick);


//코드 개선점
//1. 쓸데없는 DOMContentLoaded : main.html에서 JS는 DOM트리가 완성되고 실행되고 있다. </body>위에 있음.
//2. 로그인 실패시 문구 추가 : main.html에서 <span></span>을 추가해서 innerText를 넣어준다.





