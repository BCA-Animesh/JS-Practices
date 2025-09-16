let count1= document.querySelector("#leftClick");
let count2= document.querySelector("#rightClick");
let count= parseInt(document.querySelector("h1").innerText);
count1.addEventListener("click", function() {
    document.querySelector("h1").innerText = count= count + 1;
});
count2.addEventListener("click", function() {
    document.querySelector("h1").innerText = --count;
});