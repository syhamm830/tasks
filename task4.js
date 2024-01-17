//task4
function ajoutPersonne() {
    var name = document.getElementById("name");
    var listRegis = document.getElementById("regis");

    if (name.value.trim() !== "") {
        var item = document.createElement("li");
        item.innerHTML = name.value + ' <button onclick="vaccine(this)">V</button> <button onclick="del(this)">X</button>';
        listRegis.appendChild(item);
        name.value = "";
    }
}

document.getElementById("button").addEventListener("click", ajoutPersonne);
//document.getElementById("bvac").addEventListener("click", vaccine);
//document.getElementById("bdel").addEventListener("click", del);

function vaccine(button) {
    var listVacc = document.getElementById("vacc");
    var item = button.parentNode;
    item.removeChild(button);
    listVacc.appendChild(item);
}

function del(button) {
    var item = button.parentNode;
    var list = item.parentNode;
    list.removeChild(item);
}
