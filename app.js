let count = 0;
let countEl = document.getElementById("count-el");


function increment() {
    count += 1;
    countEl.innerText = count;
    console.log("button clicked " + count + " time/s");
}

function reset() {
    count = 0;
    countEl.innerText = count;
}