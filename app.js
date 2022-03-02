const inputText = document.getElementById("input-text");
const result = document.getElementById("outputresult");
const change = document.getElementById("unit-change");
const converter = document.getElementById("unit-converter");
const cent = document.getElementById("centimeter");
const milli = document.getElementById("millimeter");
const micro = document.getElementById("micrometer");
const unity = document.querySelectorAll(".unit")


// Taking the intial value
console.log(change.value, "change")
console.log(converter.value, "converter")
console.log(cent.value, "centimeter")


inputText.addEventListener("keyup", function () {
  
   let amount = inputText.value;
  console.log(amount, "changeuy")

   let transformer = (amount / 1000);

  console.log(amount, "amount");

  console.log(converter, "converter");


  result.innerText = `${amount} ${change.value} = ${transformer} ${converter.value}`;


  let metric = (amount / 0.01)

  console.log(metric, "mertic")

  function separator(metric) {
    var str = metric.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  cent.innerText = separator(metric)


  let fraction = (amount * 1000.000)
  console.log(fraction, "fraction")
  function separator(fraction) {
    var str = fraction.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  milli.innerText = separator(fraction)


  let micron = (amount * 1000)
  console.log(micron, "micron")
  function separator(micron) {
    var str = micron.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  micro.innerText = separator(micron)
});




//  unity.addEventListener("change", function () {
//   if (amount === "meter" && transformer === "kilometer") {
//     result.value = (amount / 1000)
//   } else if (amount === "meter" && transformer === "meter") {
//     result.value = inputText
//   } else if (amount === "meter" && transformer === "millimeter") {
//     result.value = (amount * 1000.000)
//   } else if (amount === "meter" && transformer === "mile") {
//     result.value = (amount * 0.000621)
//   } else if (amount === "meter" & transformer === "centimeter") {
//     result.value = (amount / 0.01)
//   }
// alert("ok")
//  })
// converter.addEventListener("change", function () {

//  })





