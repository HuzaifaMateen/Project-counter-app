let countEl = document.getElementById("count-el");
let count = 0;
let saveEl =document.getElementById("save-el");
function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
	let paragraph = count + " - ";
	saveEl.textContent += paragraph;
	countEl.textContent = 0;
	count = 0;
    console.log(count);
}