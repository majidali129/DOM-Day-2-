let html = document.querySelector("html");
let container = document.createElement("div")
html.style.fontSize = "62.5%"
html.style.fontFamily = "sarif"
let body = document.body;
container.className = "container";
body.appendChild(container);
body.style.widows = "100%"
body.style.height = "100vh"
container.style.width = "100%"
container.style.height = "100%"
// container.style.border = "1px solid green";
container.style.padding = "2em"
container.style.position = "relative"
// container.style.height = "auto"


let intro_container = document.createElement("div");
container.append(intro_container)
intro_container.style.display = "flex"
intro_container.style.alignItems = "center"
intro_container.style.justifyContent = "center"
intro_container.style.flexDirection = "column"
// intro_container.style.border = "1px solid green"

let title = document.createElement("h2");
intro_container.appendChild(title)
title.innerHTML = "Number Generator"
title.style.fontSize = "2.5rem"
title.style.color = "black"
title.style.letterSpacing = "0.02em"

let reminder = document.createElement("h4");
intro_container.appendChild(reminder)
reminder.innerHTML = "30DaysOfJavaScript:DOM Day 2"
reminder.style.textDecoration = "underline"
reminder.style.fontSize = "1.5rem"

let author = document.createElement("h4")
intro_container.appendChild(author)
author.innerHTML = "Author: Asabeneh Yetayeh"
author.style.marginTop = "0.3em"
author.style.marginBottom = "0.3em"

let number_container = document.createElement("div");
number_container.className = "number-container";
container.appendChild(number_container);
// number_container.style.border = "2px solid red"
number_container.style.width = "70%"
number_container.style.margin = "auto"
number_container.style.position = "absolute"
number_container.style.top = "10%"
number_container.style.left = "50%"
number_container.style.transform = "translateX(-50%)"
number_container.style.padding = "6em"
number_container.style.display = "flex"
number_container.style.alignItems = "center"
number_container.style.justifyContent = "center"
number_container.style.flexWrap = "wrap";







for(let i=0; i<102; i++){
    let number_box = document.createElement("div");
    number_box.className = "number";
    number_box.style.width = "110px"
    number_box.style.height = "70px"
    // number_box.style.border = "2px solid black"
    number_box.style.textAlign = "center"
    number_box.style.padding = "0.5em 1.4em"
    number_box.style.margin = "0.1em 0.2em"
    // number_box.style.backgroundColor = "yellow"
    number_container.appendChild(number_box);

    number_box.innerHTML = i ;
    number_box.style.display = "flex"
    number_box.style.alignItems = "center"
    number_box.style.justifyContent = "center"
    number_box.style.fontSize = '4rem'
    number_box.style.fontWeight = "bolder"

   if(i%2==0){
    number_box.style.backgroundColor = 'green'
   }
   if(i%2==1 ){
    number_box.style.backgroundColor = 'yellow'
   }
//    if(i%i==0){
//     number_box.style.backgroundColor = "red"
//    } 
}







