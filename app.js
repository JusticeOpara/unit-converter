const inputText = document.getElementById("input-text");
const result = document.getElementById("outputresult");
const change = document.getElementById("unit-change");
const converter = document.getElementById("unit-converter");
const cent = document.getElementById("centimeter");
const milli = document.getElementById("millimeter");
const micro = document.getElementById("micrometer")

console.log (change.value,"change")
console.log(converter.value,"converter")
console.log(cent.value,"centimeter")


inputText.addEventListener("keyup", function () {


   let amount = inputText.value;
   console.log(amount,"changeuy")

   let transformer = (amount / 1000);

  console.log(amount, "amount");

   console.log(converter, "converter");


  result.innerText = `${amount} ${change.value} = ${transformer} ${converter.value}`;

let metric = (amount/0.01)
console.log(metric,"mertic")
cent.innerText = metric

let fraction = (amount*1000.000)
console.log(fraction,"fraction")
milli.innerText = fraction

let micron = (amount*1000)
console.log(micron,"micron")
micro.innerText = micron
});





