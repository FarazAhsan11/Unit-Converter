/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let input         = document.getElementById("input-el")
const convertBtn  = document.getElementById("convert-btn")
let convertLength  = document.getElementById("convert-length")
let convertVolume = document.getElementById("convert-volume")
let convertKilo   = document.getElementById("convert-kilo")

convertBtn.addEventListener("click", function(){
   let value = input.value
   let meterToFeet = value*3.281
   let feetToMeter = value*0.3048
   let literToGallons = value*0.264172
   let gallonsToLiters = value*3.78541
   let kiloToPounds = value*2.20462
   let poundsToKilo = value*0.453592
   
convertLength.textContent =`${value} meters = ${meterToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeter.toFixed(3)} meters`        
    
convertVolume.textContent =`${value} liters = ${ literToGallons.toFixed(3)} gallons | ${value} gallons = ${gallonsToLiters.toFixed(3)} liters` 

convertKilo.textContent =`${value} kilos = ${kiloToPounds.toFixed(3)} pounds | ${value} pounds = ${poundsToKilo.toFixed(3)} kilos`  

input.value = " "
})

