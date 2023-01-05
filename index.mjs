//Arrays for all possible prefix for mobile carriers in Nigeria
const mtnPrefixes = [
    "0703", "0706", "0803", "0806", "0810", "0813", "0814", "0816", "0903", "0906", "0913", "+234913",
    "+234703", "+234706", "+234803", "+234806", "+234810", "+234813", "+234814", "+234816", "+234903", "+234906"
  ]
  
  const airtelPrefixes = [
    "0701", "0708", "0802", "0808", "0812", "0901", "0902", "0907", "0912", "+234701",
    "+234708", "+234802", "+234808", "+234812", "+234901", "+234902", "+234907"
  ]
  
  const gloPrefixes = [
    "0705", "0805", "0807", "0811", "0815", "0905", "+234705", "+234805", "+234807", "+234811",
    "+234815", "+234905"
  ]
  
  const nineMobilePrefixes = [
    "0809", "0817", "0818", "0908", "0909", "+234809", "+234817", "+234818", "+234908", "+234909"
  ]
  
  
  //Main Function for the program 
  function mainFunction() {
  
  
  
    if (numInput.value[0] == "+" || numInput.value[0] == "0") { //Validity check if first value of number is equal to 0 or +
  
      //Start of MTN Block
      for (let i = 0; i < mtnPrefixes.length; i++) {
        if (
          numInput.value.slice(0, 4) == mtnPrefixes[i] || numInput.value.slice(0, 7) == mtnPrefixes[i] //
        ) {
          if (numInput.value[0] == "0" && numInput.value.length > 11 || numInput.value[0] == "+" && numInput.value.length > 14) {
            numInput.style.backgroundImage = "url(images/invalid.png)";
          } else {
            numInput.style.backgroundImage = "url(images/mtn.png)";
          }
        } else if (numInput.value[0] == "0" && numInput.value.length < 4 || numInput.value[0] == "+" && numInput.value.length < 7) {
          numInput.style.backgroundImage = "url()";
        }
      }
      //End of MTN Block
  
  
      // Start of Airtel Block
      for (let j = 0; j < airtelPrefixes.length; j++) {
        if (
          numInput.value.slice(0, 4) == airtelPrefixes[j] || numInput.value.slice(0, 7) == airtelPrefixes[j]
        ) {
          if (numInput.value[0] == "0" && numInput.value.length > 11 || numInput.value[0] == "+" && numInput.value.length > 14) {
            numInput.style.backgroundImage = "url(images/invalid.png)";
          } else {
            numInput.style.backgroundImage = "url(images/airtel.png)";
          }
        }
      }
      // End of Airtel Block
  
  
      // Start of Glo Block
      for (let k = 0; k < mtnPrefixes.length; k++) {
        if (
          numInput.value.slice(0, 4) == gloPrefixes[k] || numInput.value.slice(0, 7) == gloPrefixes[k]
        ) {
          if (numInput.value[0] == "0" && numInput.value.length > 11 || numInput.value[0] == "+" && numInput.value.length > 14) {
            numInput.style.backgroundImage = "url(images/invalid.png)";
          } else {
            numInput.style.backgroundImage = "url(images/glo.jpeg)";
          }
        }
      }
      // End of Glo Block
  
  
      // Start of 9Mobile Block
      for (let l = 0; l < nineMobilePrefixes.length; l++) {
        if (
          numInput.value.slice(0, 4) == nineMobilePrefixes[l] || numInput.value.slice(0, 7) == nineMobilePrefixes[l]
        ) {
          if (numInput.value[0] == "0" && numInput.value.length > 11 || numInput.value[0] == "+" && numInput.value.length > 14) {
            numInput.style.backgroundImage = "url(images/invalid.png)";
          } else {
            numInput.style.backgroundImage = "url(images/9mobile.jpeg)";
          }
        }
      }
      // End of 9Mobile Block
  
    } else if (numInput.value.length < 3) {
      numInput.style.backgroundImage = "url()";
    }
    else {
      numInput.style.backgroundImage = "url(images/invalid.png)";
    }
  
  
  } // End of Main Function
  
  
  
  let numInput = document.getElementById("number");
  numInput.addEventListener('input', mainFunction);
  
  