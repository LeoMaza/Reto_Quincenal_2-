const MIN_CASILLAS = 1;
const MAX_CASILLAS = 20;

document.querySelector("#ejecutar").setAttribute("onclick", "process()")
let checkboxes = document.querySelector("#checkboxes");

function process() {
    checkboxes.innerHTML = "";
    let alteracion = document.querySelector("#alteracion").value;

    for (let i = 1; i <= 20; i++) {
        checkboxes.innerHTML += `<label id="label2" for="checkbox">Checkbox ${i} </label>`
        if (i % alteracion === 0) {
            checkboxes.innerHTML += `<input type="checkbox" id="check" checked><br>`
        } else {
            checkboxes.innerHTML += `<input type="checkbox" id="check"><br>`
        };
    }
}


