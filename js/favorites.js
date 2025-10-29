document.querySelectorAll(".icon").forEach(icon => {
    icon.addEventListener("click", ()=>{
        let link = icon.dataset.link;

        if(!link.startsWith("http")){
            link = "https://"+link;
        }
        window.location.href = link;
    })
})