const form = document.querySelector("form");
const subject = document.querySelector("#subject");
const itemList = document.querySelector("#itemList");

form.addEventListener("submit", event => {
    event.preventDefault();
    newRegister();
});

itemList.addEventListener("click", (event) => {
    if(event.target.tagName === "LI") {
        if(confirm("이 항목을 삭제하시겠습니까?")) {
            event.target.remove();
        }
    }
});

function newRegister() {
    const newItem = document.createElement("li");
    const subject = document.querySelector("#subject");
    const newText = document.createTextNode(subject.value);

    newItem.appendChild(newText);
    itemList.appendChild(newItem);

    subject.value="";
    subject.focus();

}



