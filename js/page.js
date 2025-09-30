window.localStorage.setItem("username", "admin"); //웹 브라우저의 로컬 스토리지에 아이디를 admin으로 설정했다. setItem:key,value추가가능
window.localStorage.setItem("userpassword", "1234"); //비밀번호는 1234

document.addEventListener("DOMContentLoaded", () => { //웹 문서의 DOM 트리가 완성된 시점이라면
    const userIdInput = document.getElementById("user-id");  //user-id가 있는 곳 요소에 접근
    const userPwInput = document.getElementById("user-password"); //user-password가 있는 곳 요소에 접근
    const loginButton = document.getElementById("login_button"); //login-button이 있는 곳 요소에 접근

    loginButton.addEventListener("click", (event) => {
        event.preventDefault(); //preventDefault()는 event의 기본 동작을 막는 역할을 한다. 여기서 보면 loginButton은 type이 submit이어서 기본 동작이 폼 제출이다. 그래서 그걸 막아주기 위해 preventDefault를 씀.

        const savedId = localStorage.getItem("username");     //localStorage에서 username읽어오기
        const savedPw = localStorage.getItem("userpassword"); //localStorage에서 userpassword읽어오기

        if (userIdInput.value === savedId && userPwInput.value === savedPw) {
            window.location.href = "main.html"; // 로그인 성공 시 이동, window객체의 프로퍼티 location의 객체 href(전체 URL 정보)
        } else {
            alert("틀렸습니다."); // 로그인 실패
            userIdInput.value = ""; // 입력값 초기화
            userPwInput.value = "";
            userIdInput.focus(); // ID 입력창 포커스
        }
    });
});
