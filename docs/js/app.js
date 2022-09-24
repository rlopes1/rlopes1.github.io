const text = document.querySelector(".introtext");
const strText = text.textContent;

const splitText = strText.split("");


text.textContent = "";

//creating an array to keep track of space in the paragraph
let sparray = new Array();
for(let i = 0; i < splitText.length; i++) {
   if(strText.charAt(i) == ' ') {
      sparray[i] = 1;   //1 for space
   } else {
      sparray[i] = 0;   //0 for other
   }
}

//creating a character array for our spans
for(let i=0; i < splitText.length; i++) {
   if(sparray[i] == 1) {
      text.innerHTML += "<span>" + splitText[i] + "</span>";
      text.innerHTML += " ";
   } else {
      text.innerHTML += "<span>" + splitText[i] + "</span>";
   }
}


let char = 0;
let timer = setInterval(onTick, 60);

function onTick() {
   const span = text.querySelectorAll('span')[char];
   span.classList.add('fade');
   char++;
   if(char === splitText.length) {
      complete();
      return;
   }
}

function complete() {
   clearInterval(timer);
   timer = null;
}
