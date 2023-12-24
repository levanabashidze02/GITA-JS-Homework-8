function listPrint(list) {
  // ფუნქციის შიგნით ID-ს შემოტანა ადეკვატურია?
  var printedList = document.getElementById("output");

  for (let i = 0; i < list.length; i++) {
    printedList.innerHTML += "<p>" + list[i] + "</p>";
  }
}

const firstList = ["Lasha", "Gio", "Tornike", "Parmeni", "Aliosha"];

listPrint(firstList);
