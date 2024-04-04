function convert() {
    const fromType = document.getElementById("fromType").value;
    const toType = document.getElementById("toType").value;
    const inputValue = document.getElementById("temperatureInput").value;
  
    if (!inputValue) {
      alert("Please enter a temperature.");
      return;
    }
  
    let convertedValue;
  
    if (fromType === "celsius" && toType === "fahrenheit") {
      convertedValue = (parseFloat(inputValue) * 9/5) + 32;
    } else if (fromType === "celsius" && toType === "kelvin") {
      convertedValue = parseFloat(inputValue) + 273.15;
    } else if (fromType === "fahrenheit" && toType === "celsius") {
      convertedValue = (parseFloat(inputValue) - 32) * 5/9;
    } else if (fromType === "fahrenheit" && toType === "kelvin") {
      convertedValue = (parseFloat(inputValue) - 32) * 5/9 + 273.15;
    } else if (fromType === "kelvin" && toType === "celsius") {
      convertedValue = parseFloat(inputValue) - 273.15;
    } else if (fromType === "kelvin" && toType === "fahrenheit") {
      convertedValue = (parseFloat(inputValue) - 273.15) * 9/5 + 32;
    } else {
      alert("Invalid conversion.");
      return;
    }
  
    document.getElementById("convertedValue").textContent = convertedValue.toFixed(2);
  }
  