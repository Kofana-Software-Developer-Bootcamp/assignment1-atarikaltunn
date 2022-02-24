var arr = [];

var basvuru = {
    isim: "",
    email: "",
    yas: "",
    universite: "",
    bolum: "",
    sinif: "",
    sehir: "",
    bootcamp_katilim: "",
    hobiler: ""
};

// var form = document.getElementById("bootcampForm");

// document.getElementById("submitBtn").addEventListener("click", function () {
//   alert("submitted");
//   console.log(form);
// });
// console.log(1);
function onSubmit() {
  // console.log(2);
  alert("submitted");
  basvuru.isim = document.getElementById("name").value;
  basvuru.email = document.getElementById("email").value;
  basvuru.yas = document.getElementById("age").value;
  basvuru.universite = document.getElementById("university").value;
  basvuru.bolum = document.getElementById("department").value;
  basvuru.sinif = document.getElementById("grade-choice").value;
  basvuru.sehir = document.getElementById("city").value;
  basvuru.bootcamp_katilim = document.getElementById("bootcamp").value;
  basvuru.hobiler = document.getElementById("hobby").value;
  // console.log(basvuru.isim);
  arr.push(basvuru);

}
// console.log(3);