/*const text = document.querySelector(".introtext");
const strText = text.textContent;

const splitText = strText.split(" ");


text.textContent = "";

//creating a character array for our spans
for(let i=0; i < splitText.length; i++) {
      text.innerHTML += "<span>" + splitText[i] + "</span>";
      text.innerHTML += " ";
}

console.log(splitText)

let word = 0;
let timer = setInterval(onTick, 60);

function onTick() {
   const span = text.querySelectorAll('span')[word];
   span.classList.add('fade');
   word++;
   if(word === splitText.length) {
      complete();
      return;
   }
}
function complete() {
   clearInterval(timer);
   timer = null;
}*/


let popupArray = document.querySelectorAll('.popup');
function openPopup(i) {
   popupArray[i].classList.add("openPopup");
}
function closePopup(i) {
   popupArray[i].classList.remove("openPopup");
}



const slides = document.querySelectorAll(".slide");
let currSlide = 0;

const nextSlide = document.querySelector(".nextbutton");
let maxSlides = slides.length - 1;
nextSlide.addEventListener("click", function () {
   if(currSlide == maxSlides) {
      currSlide = 0;
   } else {
   currSlide++;
   }
   slides.forEach((slide, idx) => {
      slide.style.transform = `translateX(${(idx - currSlide)* 100}%)`;
   });
});

const prevSlide = document.querySelector(".prevbutton");
prevSlide.addEventListener("click", function(){
   if(currSlide == 0) {
      currSlide = maxSlides;
   } else {
      currSlide--;
   }
   slides.forEach((slide, idx) => {
      slide.style.transform = `translateX(${(idx - currSlide)* 100}%)`;
   });
})

