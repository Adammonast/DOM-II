// Your code goes here

//10 Unique Events

//Mouse Over
const zoomImages = document.querySelectorAll("img");
zoomImages.forEach( (zoomIn) => {
    zoomIn.addEventListener("mouseover", function() {
        zoomIn.style.transform = "scale(1.2)";
        zoomIn.style.transition = "transform 0.3s";
    })
    zoomIn.addEventListener("mouseleave", function() {
        zoomIn.style.transform = "scale(1)"
    })
})

const navText = document.querySelectorAll("a");
navText.forEach(function(zoomText){
    zoomText.addEventListener("mouseover", (event) => {
        zoomText.style.transform = "scale(1.5)";
        zoomText.style.transition = "transform 0.3s"
    })
    zoomText.addEventListener("mouseleave", (event) => {
        zoomText.style.transform = "scale(1)";
    })
})

const titleText = document.querySelectorAll("h2");
titleText.forEach(function(zoomTitle){
    zoomTitle.addEventListener("mouseover", (event) => {
        zoomTitle.style.transform = "scale(1.2)";
        zoomTitle.style.transition = "transform 0.3s"
    })
    zoomTitle.addEventListener("mouseleave", (event) => {
        zoomTitle.style.transform = "scale(1)";
    })
})

const allText = document.querySelectorAll("p");
allText.forEach(function(item){
    item.addEventListener("mouseover", (event) => {
        item.style.transform = "scale(1.2)";
        item.style.transition = "transform 0.3s"
    })
    item.addEventListener("mouseleave", (event) => {
        item.style.transform = "scale(1)";
    })
})

const destinationText = document.querySelectorAll("h4");
destinationText.forEach(function(destinationTitle){
    destinationTitle.addEventListener("mouseover", (event) => {
        destinationTitle.style.transform = "scale(1.2)";
        destinationTitle.style.transition = "transform 0.3s"
    })
    destinationTitle.addEventListener("mouseleave", (event) => {
        destinationTitle.style.transform = "scale(1)";
    })
})

//Click
document.querySelectorAll(".btn").forEach(element => {
    element.addEventListener("click", function() {
      element.style.color = "white";  
      element.style.backgroundColor = "grey";
    })
})

document.querySelectorAll(".nav-link").forEach(element => {
    element.addEventListener("click", function() {
      element.style.color = "teal";  
    })
})

//Double Click
const darkMode = document.querySelector("*");
const darkModeHeader = document.querySelector("header");
const darkModeFooter = document.querySelector("footer");
const links = document.querySelectorAll(".nav-link")
const enableDarkMode = function(){
    darkMode.style.color = "white";
    darkMode.style.backgroundColor = "black";
    links.forEach(link => {
        link.style.color = "white";   
    })
    darkModeHeader.style.backgroundColor = "black";
    darkModeFooter.style.color = "white";
    darkModeFooter.style.backgroundColor = "black";
}
const enableLightMode = function(){
    darkMode.style.color = "black";
    darkMode.style.backgroundColor = "white";
    links.forEach(link => {
        link.style.color = "black";   
    })
    darkModeHeader.style.backgroundColor = "white";
    darkModeFooter.style.color = "black";
    darkModeFooter.style.backgroundColor = "white"; 
}
const isInLightMode = darkMode.style.backgroundColor === "" || "white";
  darkMode.addEventListener("dblclick", function(){
      if(isInLightMode){
        enableDarkMode();
      } else {
        enableLightMode();
      } 
})

//Stop Propogation
const footer = document.querySelector("footer");
footer.addEventListener("mousemove", () => {
    footer.style.backgroundColor = "grey";

})

footer.addEventListener("click", () => { 
    footer.style.background = "lightblue";
})

const copy = document.querySelector("footer p");
copy.addEventListener("click", (event) => {
    copy.style.color = "lightblue";
    event.stopPropagation();
})
 
 
//Stop Default
const stopLink = document.querySelector(".nav-link");
stopLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("stopped the link")
})