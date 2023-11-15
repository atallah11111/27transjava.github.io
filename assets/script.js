const dynamicText = document.querySelector(".container .right-column .isi2  a span");
const dynamicText1 = document.querySelector(".sec2 span");
const words = [ "Beautiful Journey." ,"Traveling.", "beautiful Trip." , "Everything."];
const words1 = [ "27 TRANS", "27 TRANS" , "27 TRANS" , "27 TRANS"  ];


let wordIndex = 0;
let charIndex = 1;
let isDeleting = false;



const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex)
    console.log(currentWord,currentChar);
    dynamicText.textContent = currentChar;


    if(!isDeleting && charIndex < currentWord.length){
        charIndex++;
        setTimeout(typeEffect, 300);
    } else if (isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1300);
    }
}
typeEffect();

let wordIndex1 = 0;
let charIndex1 = 1;
let isDeleting1 = false;

const typeEffect1 = () => {
    const currentWord1 = words1[wordIndex1];
    const currentChar1 = currentWord1.substring(0, charIndex1)
    console.log(currentWord1,currentChar1);
    dynamicText1.textContent = currentChar1;


    if(!isDeleting1 && charIndex1 < currentWord1.length){
        charIndex1++;
        setTimeout(typeEffect1, 300);
    } else if (isDeleting1 && charIndex1 > 0){
        charIndex1--;
        setTimeout(typeEffect1, 200);
    } else {
        isDeleting1 = !isDeleting1;
        wordIndex1 = !isDeleting1 ? (wordIndex1 + 1) % words1.length : wordIndex1;
        setTimeout(typeEffect1, 1300);
    }
}
typeEffect1();





var whatsappLink = document.getElementById('whatsapp-link');
whatsappLink.addEventListener('click', function(event) {
  event.preventDefault(); 
  var phoneNumber = '6282330390609';
  var message = 'Halo kak, saya ingin mesan tiket nih?';
  var url = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);
  window.open(url, '_blank');
});
