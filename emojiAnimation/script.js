const baby = document.querySelector(".baby");
const girl = document.querySelector(".girl");
const adult = document.querySelector(".adult");
const old = document.querySelector(".old");
var title = document.getElementById("emojiTitle");

baby.addEventListener("click" , () => {
    title.innerHTML = "GIRL"; /* Bir sonraki emoji için */
    title.style.color = "#b8438e";
    if(baby.classList.contains("baby")){
        girl.classList.add("active"); /* önce bir sonraki emojiye aktive classını ekliyor sonra kendinden siliyor. */
        baby.classList.remove("active");
    }
});

girl.addEventListener("click", () =>{
    title.innerHTML = "ADULT";
    title.style.color = "#659655";
    if(girl.classList.contains("girl")){
        adult.classList.add("active");
        girl.classList.remove("active");
    }
});

adult.addEventListener("click" , () =>{
    title.innerHTML = "OLD";
    title.style.color = "#40c0c0";
    if(adult.classList.contains("adult")){
        old.classList.add("active");
        adult.classList.remove("active");
    }
});

old.addEventListener("click" , () =>{
    title.innerHTML = "BABY";
    title.style.color = "#6763a0";
    if(old.classList.contains("old")){
        baby.classList.add("active");
        old.classList.remove("active");
    }
});