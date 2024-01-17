//task 3
function handleChange() {
    var text = document.getElementById("nameInput").value;
    document.getElementById("typep").innerText = text;
}

document.getElementById("nameInput").addEventListener("input", handleChange);

function handleAjout() {
    var text = document.getElementById("nameInput").value;
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(text));
    document.getElementById("mylist").appendChild(item);
    document.getElementById("nameInput").value = '';
    document.getElementById("typep").innerText = '';
}

document.getElementById("button").addEventListener("click", handleAjout);
