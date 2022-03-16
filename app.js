const inputText = document.getElementById("input-text");
const result = document.getElementById("outputresult");
const firstSelectedBtn = document.getElementById("unit-change");
const secondSelectBtn = document.getElementById("unit-converter");
const convertingToCentimeter = document.getElementById("centimeter");
const convertingToMillimeter = document.getElementById("millimeter");
const convertingToMicrometer = document.getElementById("micrometer");



// Taking the intial value
console.log(firstSelectedBtn.value, "change")
console.log(secondSelectBtn.value, "converter")

inputText.addEventListener("keyup", myResult);
firstSelectedBtn.addEventListener("change", myResult);
secondSelectBtn.addEventListener("change", myResult);


function myResult() {

  let amountVal = inputText.value;
  console.log(amountVal, "changeuy");

  let exchangeVal = inputText.value;
  exchangeVal = (amountVal / 1000);

  console.log(amountVal, "amgount");
  // console.log(converter, "converter");

  let firstUnit = firstSelectedBtn.value;
  console.log(firstUnit, "firstunit");

  let secUnit = secondSelectBtn.value;
  console.log(secUnit, "secUnit");


  /* changing the options in the unit-change and the options in the unit-converter and 
    return the value in the result as the change.*/
  if (firstUnit === "meter") {

    let valueResult;

    switch (secUnit) {
      case 'kilometer':
        valueResult = amountVal * 0.01;
        console.log(valueResult, "meter to kilometer");
        break;

      case 'millimeter':
        valueResult = amountVal / 0.001;
        console.log(valueResult, "meter to milimeter");
        break;

      case 'mile':
        valueResult = amountVal * 0.000621;
        console.log(valueResult, "meter to mile");
        break;

      case 'centimeter':
        valueResult = amountVal * 100;
        console.log(valueResult, "meter to centimeter");
        break;
      default:
        console.log("No value found");
    }

    console.log(valueResult, "RESULT OF VALUE")
  }



  if (firstUnit === "kilometer") {

    let valueResult;

    switch (secUnit) {
      case 'meter':
        valueResult = amountVal * 1000;
        console.log(valueResult, "kilometer to meter");
        break;

      case 'millimeter':
        valueResult = amountVal * 1000;
        console.log(valueResult, "kilometer to milimeter");
        break;

      case 'mile':
        valueResult = amountVal * 0.621371;
        console.log(valueResult, "kilometer to mile");
        break;

      case 'centimeter':
        valueResult = amountVal * 100;
        console.log(valueResult, "kilometer to centimeter");
        break;
      default:
        console.log("No value found");
    }
    console.log(valueResult, "RESULT OF VALUE")
  }



  if (firstUnit === "millimeter") {

    let valueResult;

    switch (secUnit) {
      case 'meter':
        valueResult = amountVal / 1000;
        console.log(valueResult, "kilometer to meter");
        break;

      case 'kilometer':
        valueResult = amountVal / 1000000;
        console.log(valueResult, "kilometer to milimeter");
        break;

      case 'mile':
        valueResult = amountVal / 1609344;
        console.log(valueResult, "kilometer to mile");
        break;

      case 'centimeter':
        valueResult = amountVal / 10;
        console.log(valueResult, "kilometer to centimeter");
        break;
      default:
        console.log("No value found");
    }
    console.log(valueResult, "RESULT OF VALUE")
  }



  if (firstUnit === "mile") {

    let valueResult;

    switch (secUnit) {
      case 'meter':
        valueResult = amountVal / 0.00062137;
        console.log(valueResult, "kilometer to meter");
        break;

      case 'millimeter':
        valueResult = amountVal * 1.609344;
        console.log(valueResult, "kilometer to milimeter");
        break;

      case 'kilometer':
        valueResult = amountVal * 0.609344;
        console.log(valueResult, "kilometer to mile");
        break;

      case 'centimeter':
        valueResult = amountVal * 160934.4;
        console.log(valueResult, "kilometer to centimeter");
        break;
      default:
        console.log("No value found");
    }
    console.log(valueResult, "RESULT OF VALUE")
  }



  if (firstUnit === "centimeter") {

    let valueResult = inputText.value;

    switch (secUnit) {
      case 'meter':
        valueResult = amountVal / 100;
        console.log(valueResult, "kilometer to meter");
        break;

      case 'millimeter':
        valueResult = amountVal * 10;
        console.log(valueResult, "kilometer to milimeter");
        break;

      case 'kilometer':
        valueResult = amountVal * 100000;
        console.log(valueResult, "kilometer to mile");
        break;

      case 'mile':
        valueResult = amountVal * 6.2137E-6;
        console.log(valueResult, "kilometer to centimeter");
        break;
      default:
        console.log("No value found");
    }

    console.log(valueResult, "RESULT OF VALUE");
    
  };

  

  /* Getting the result value */
  result.innerText = `${amountVal} ${firstSelectedBtn.value}  =  ${exchangeVal} ${secondSelectBtn.value} `;



  let selectedValue = secondSelectBtn.value
  console.log(selectedValue, "SELECTED-VALUE");

  selectedValue = (amountVal / 0.01);
  console.log(selectedValue, "centimeter");
  function separator(selectedValue) {
    var str = selectedValue.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  convertingToCentimeter.innerText = separator(selectedValue);
  

  selectedValue = (amountVal * 1000.000);
  console.log(selectedValue, "millimeter");
  function separator(selectedValue) {
    var str = selectedValue.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  convertingToMillimeter.innerText = separator(selectedValue);


  selectedValue = (amountVal * 1000)
  console.log(selectedValue, "micrometer")
  function separator(selectedValued) {
    var str = selectedValue.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
  }
  convertingToMicrometer.innerText = separator(selectedValue);

};
