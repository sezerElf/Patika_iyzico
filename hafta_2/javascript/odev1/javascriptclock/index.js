let name = prompt("Lütfen Adını Gir");
let myname = document.querySelector("#myName");
myname.innerHTML = `${name}`;

let days = [
  "pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

function showTime() {
  var date = new Date(); // 
  var day = days[date.getDay()];
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  document.querySelector(
    "#myClock"
  ).innerHTML = `${hour} : ${minute}: ${second} / ${day}`;
}
setInterval(showTime, 1000);
