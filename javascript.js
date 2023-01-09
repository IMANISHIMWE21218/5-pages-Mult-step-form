const slidePage = document.querySelector(".slidePage");
const zeroNextBtn = document.querySelector(".nextBtn-0");

const firstNextBtn = document.querySelector(".nextBtn-1");
const firstPrevBtn = document.querySelector(".backBtn-1");

const secNextBtn = document.querySelector(".nextBtn-2");
const secPrevBtn = document.querySelector(".backBtn-2");

const thirdNextBtn = document.querySelector(".nextBtn-3");
const thirdPrevBtn = document.querySelector(".backBtn-3");

const fouthNextBtn = document.querySelector(".nextBtn-4");
const fouthPrevBtn = document.querySelector(".backBtn-4");

const submit= document.querySelector(".submitBtn");



zeroNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-20%";
});

firstNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-40%";
});

secNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-60%";
});

thirdNextBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-80%";
});

// ------------Back buttons------------

firstPrevBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
});

secPrevBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-20%";
});

thirdPrevBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-40%";
});

fouthPrevBtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-60%";
});

// ------------SUbmit  button------------


submit.addEventListener("click", function(){
     setTimeout(() => {
        alert("submited successfully!");
     }, 800);
});





