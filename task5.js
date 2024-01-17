//task5
//it still not working and I know It's missing a lot I just didn't figure out what to write
function handleFile() {
    var photoInput = document.getElementById("photoInput");
    if (photoInput.files.length > 0) {
        var photoURL = URL.createObjectURL(photoInput.files[0]);
    }

}

function handleChange() {
    var nameInput = document.getElementById("nameInput");

}

function ajoutPost() {
    var nameInput = document.getElementById("nameInput");
    var photoInput = document.getElementById("photoInput");
    var studentsList = document.getElementById("stud");

    if (nameInput.value.trim() !== "" && photoInput.files.length > 0) {
        var item = document.createElement("li");
        var photoURL = URL.createObjectURL(photoInput.files[0]);
        item.innerHTML = `
            <div>
                <button  onclick="del(this)">Delete</button>
            </div>
            
        `;
        studentsList.appendChild(item);
        nameInput.value = "";
        photoInput.value = "";
    }
}

function del(button) {
    var item = button.parentNode.parentNode; 
    var list = item.parentNode;
    list.removeChild(item);
}

document.getElementById("photoInput").addEventListener("change", handleFile);
document.getElementById("nameInput").addEventListener("input", handleChange);
document.getElementById("button").addEventListener("click", ajoutPost);
