let listDom = document.querySelector("#list");
let taskDom = document.querySelector("#task");
let buttonDom = document.querySelector("#liveToastBtn");

//add new task
function newElement() {
  let liDom = document.createElement("li");
  liDom.innerHTML = task.value;
  listDom.appendChild(liDom);
  taskDom.value="";
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  lilength[i].append(closeButton);
  closeButton.classList.add("close");
  closeButton.onclick = removeButton;
  lilength[i].onclick=checked;
}

//add Close button and cheched
let lilength = document.getElementsByTagName("li");
for (i = 0; i < lilength.length; i++) {
  let closeButton = document.createElement("span");
  closeButton.textContent = "\u00D7";
  lilength[i].append(closeButton);
  closeButton.classList.add("close");
  closeButton.onclick = removeButton;
  lilength[i].onclick=checked;
}
function removeButton() {
  this.parentElement.remove();
}

function checked(){
    this.classList.toggle("checked");
}