// penggunaan if, else, dan nested if
const animal = "kucing"

if (animal === "kucing") {
    console.log("Saya suka kucing");
  } else if (animal === "anjing") {
    console.log("anjing juga lucu");
  } else if (animal === "hiu") {
    console.log("hiu itu menakutkan");
  } else {
    console.log("kurang mengetahui hewan tersebut");
  }

  // penggunaan switch case 
  const hewan = "anjing";
  
  switch (hewan) {
    case "kucing":
      console.log("Saya suka kucing");
      break;
    case "anjing":
      console.log("anjing juga lucu");
      break;
    case "hiu":
      console.log("hiu itu menakutkan");
      break;
    default:
      console.log("kurang mengetahui hewan tersebut");
  }

  //  penggunaan for statement 
  for (var nilaiAwal = 1; nilaiAwal <= 5; nilaiAwal++){
    console.log('tepuk tangan '+ nilaiAwal + 'x');
  }

  //  penggunaan while loop 
  var nilaiAwal = 1;
  while (nilaiAwal <= 5) {
  console.log('salto ' + nilaiAwal + 'x');
  nilaiAwal++;
}

//  penggunaan do-while loop 
var nilaiAwal = 1;
do {
  console.log('kayang ' + nilaiAwal + 'x');
  nilaiAwal++;
} while (nilaiAwal <= 5);

//  penggunaan fuction
function cetakPesan(pesan, jumlah) {
    var nilaiAwal = 1;
    
    while (nilaiAwal <= jumlah) {
      console.log(pesan + nilaiAwal + 'x');
      nilaiAwal++;
    }
}

cetakPesan('astagfirullah ', 5);
