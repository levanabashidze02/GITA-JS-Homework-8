function listPrint(list) {
  // ფუნქციის შიგნით ID-ს შემოტანა ადეკვატურია?
  var printedList = document.getElementById("output");

  for (let i = 0; i < list.length; i++) {
    let modulo = list[i] % 2;
    if (modulo != 0) {
      printedList.innerHTML += "<p>" + list[i] + "</p>";
    }
  }
}

const firstList = [15, 53, 22, 198, 10, 28, 16, 70, 33, 951];

listPrint(firstList);
