
// SHOW LENGTH PAGE - START

function showLengthPage() {
    let lengthPageDOM = document.querySelector("#length-page");
    if (lengthPageDOM.style.display === "none") {
        lengthPageDOM.style.display = "block";
    } else {
        lengthPageDOM.style.display = "none";
    }
}
// SHOW LENGTH PAGE - START

// LENGTH UNITS CONVERTER - START
// funit = FirstUnit , sunit = SecondUnit   
function calculateUnits(funit, sunit) {
    funit = document.querySelector("#calFrom").value;
    sunit = document.querySelector("#calTo").value;
    let result = document.querySelector("#result");
    let numberDOM = document.querySelector("#numberInput")

    if(funit == "millimeter" && sunit == "millimeter" ||
       funit == "centimeter" && sunit == "centimeter" ||
       funit == "meter" && sunit == "meter" ||
       funit == "kilometer" && sunit == "kilometer" ||
       funit == "inch" && sunit == "inch" ||
       funit == "feet" && sunit == "feet" ||
       funit == "mile" && sunit == "mile" ||
       funit == "yard" && sunit == "yard") 
    {
        result.innerHTML = `${numberDOM.value} `
    }else if (funit == "millimeter" && sunit == "centimeter") { //millimeter start
        result.innerHTML = `${numberDOM.value} millimeter/mm = ${numberDOM.value / 10} centimeter/cm`
    }else if (funit == "millimeter" && sunit == "meter") {
        result.innerHTML = `${numberDOM.value} millimeter/mm = ${numberDOM.value / 1000} meter/m `
    }else if (funit == "millimeter" && sunit == "kilometer") {
         result.innerHTML = `${numberDOM.value} millimeter/mm = ${numberDOM.value / 1000000} kilometer/km`
    }else if (funit == "millimeter" && sunit == "inch") {
        result.innerHTML = `${numberDOM.value} millimeter/mm = ${numberDOM.value / 25.4} inch/in`
    }else if (funit == "millimeter" && sunit == "feet") {
        result.innerHTML = `${numberDOM.value} millimeter/mm = ${numberDOM.value / 304.8} feet/ft`
    }else if (funit == "millimeter" && sunit == "yard") {
        result.innerHTML = `${numberDOM.value} millimeter/mm = ${numberDOM.value / 914.4} yard/yd`
    }else if (funit == "millimeter" && sunit == "mile") {       //millimeter end
        result.innerHTML = `${numberDOM.value} millimeter/mm = ${numberDOM.value / 1609344} mile/mi`             
    }else if (funit == "centimeter" && sunit == "millimeter") { //centimeter start 
        result.innerHTML = `${numberDOM.value} centimeter/cm = ${numberDOM.value * 10} millimeter/mm`
    }else if (funit == "centimeter" && sunit == "meter") {
        result.innerHTML = `${numberDOM.value} centimeter/cm = ${numberDOM.value / 100} meter/m`
    }else if (funit == "centimeter" && sunit == "kilometer") {
        result.innerHTML = `${numberDOM.value} centimeter/cm = ${numberDOM.value / 100000 } kilometer/km`
    }else if (funit == "centimeter" && sunit == "inch") {
        result.innerHTML = `${numberDOM.value} centimeter/cm = ${numberDOM.value / 2.54} inch/in`
    }else if (funit == "centimeter" && sunit == "feet") {
        result.innerHTML = `${numberDOM.value} centimeter/cm = ${numberDOM.value / 30.48} feet/ft`
    }else if (funit == "centimeter" && sunit == "yard") {
        result.innerHTML = `${numberDOM.value} centimeter/cm = ${numberDOM.value / 91.44} yard/yd`
    }else if (funit == "centimeter" && sunit == "mile") {   //centimeter end
        result.innerHTML = `${numberDOM.value} centimeter/cm = ${numberDOM.value / 160934.4} mile/mi`         
    }else if (funit == "meter" && sunit == "millimeter") {  //meter start
        result.innerHTML = `${numberDOM.value} meter/m = ${numberDOM.value * 1000} millimeter/mm`         
    }else if (funit == "meter" && sunit == "centimeter") {
        result.innerHTML = `${numberDOM.value} meter/m = ${numberDOM.value * 100} centimeter/cm`         
    }else if (funit == "meter" && sunit == "kilometer") {
        result.innerHTML = `${numberDOM.value} meter/m = ${numberDOM.value /1000} kilometer/km`         
    }else if (funit == "meter" && sunit == "inch") {
        result.innerHTML = `${numberDOM.value} meter/m = ${numberDOM.value * 39.370078740157} inch/in`         
    }else if (funit == "meter" && sunit == "feet") {
        result.innerHTML = `${numberDOM.value} meter/m = ${numberDOM.value * 3.2808398950131} feet/ft`         
    }else if (funit == "meter" && sunit == "yard") {
        result.innerHTML = `${numberDOM.value} meter/m = ${numberDOM.value * 1.0936132983377} yard/yd`
    }else if (funit == "meter" && sunit == "mile") {            //meter end
        result.innerHTML = `${numberDOM.value} meter/m = ${numberDOM.value / 1609.344} mile/mi`         
    }else if (funit == "kilometer" && sunit == "millimeter") {  //kilometer start
        result.innerHTML = `${numberDOM.value} kilometer/km = ${numberDOM.value * 1000000} millimeter/mm`         
    }else if (funit == "kilometer" && sunit == "centimeter") {
        result.innerHTML = `${numberDOM.value} kilometer/km = ${numberDOM.value * 100000} centimeter/cm`         
    }else if (funit == "kilometer" && sunit == "meter") {
        result.innerHTML = `${numberDOM.value} kilometer/km = ${numberDOM.value * 1000} meter/m`         
    }else if (funit == "kilometer" && sunit == "inch") {
        result.innerHTML = `${numberDOM.value} kilometer/km = ${numberDOM.value * 39370.078740157} inch/in`         
    }else if (funit == "kilometer" && sunit == "feet") {
        result.innerHTML = `${numberDOM.value} kilometer/km = ${numberDOM.value * 3280.8398950131} feet/ft`         
    }else if (funit == "kilometer" && sunit == "yard") {
        result.innerHTML = `${numberDOM.value} kilometer/km = ${numberDOM.value * 1093.6132983377} yard/yd`
    }else if (funit == "kilometer" && sunit == "mile") {    //kilometer end
        result.innerHTML = `${numberDOM.value} kilometer/km = ${numberDOM.value / 1.609344} mile/mi`         
    }else if (funit == "inch" && sunit == "millimeter") {   //inch start
        result.innerHTML = `${numberDOM.value} inch/in = ${numberDOM.value * 25.4} millimeter/mm`         
    }else if (funit == "inch" && sunit == "centimeter") {
        result.innerHTML = `${numberDOM.value} inch/in = ${numberDOM.value * 2.54} centimeter/cm`         
    }else if (funit == "inch" && sunit == "meter") {
        result.innerHTML = `${numberDOM.value} inch/in = ${numberDOM.value / 39.370078740157} meter/mm`         
    }else if (funit == "inch" && sunit == "kilometer") {
        result.innerHTML = `${numberDOM.value} inch/in = ${numberDOM.value / 39370.078740157} kilometer/km`         
    }else if (funit == "inch" && sunit == "feet") {
        result.innerHTML = `${numberDOM.value} inch/in = ${numberDOM.value / 12} feet/ft`         
    }else if (funit == "inch" && sunit == "yard") {
        result.innerHTML = `${numberDOM.value} inch/in = ${numberDOM.value / 36} yard/yd`
    }else if (funit == "inch" && sunit == "mile") {         //inch end
        result.innerHTML = `${numberDOM.value} inch/in = ${numberDOM.value / 63360} mile/mi`        
    }else if (funit == "feet" && sunit == "millimeter") {   //feet start
        result.innerHTML = `${numberDOM.value} feet/ft = ${numberDOM.value * 304.8} millimeter/mm`         
    }else if (funit == "feet" && sunit == "centimeter") {
        result.innerHTML = `${numberDOM.value} feet/ft = ${numberDOM.value * 30.48} centimeter/cm`         
    }else if (funit == "feet" && sunit == "meter") {
        result.innerHTML = `${numberDOM.value} feet/ft = ${numberDOM.value / 3.2808398950131} meter/m`         
    }else if (funit == "feet" && sunit == "kilometer") {
        result.innerHTML = `${numberDOM.value} feet/ft = ${numberDOM.value / 3280.8398950131} kilometer/km`         
    }else if (funit == "feet" && sunit == "inch") {
        result.innerHTML = `${numberDOM.value} feet/ft = ${numberDOM.value *  12} inch/in`         
    }else if (funit == "feet" && sunit == "yard") {
        result.innerHTML = `${numberDOM.value} feet/ft = ${numberDOM.value / 3} yard/yd`
    }else if (funit == "feet" && sunit == "mile") {         //feet end
        result.innerHTML = `${numberDOM.value} feet/ft = ${numberDOM.value / 5280} mile/mi`        
    }else if (funit == "yard" && sunit == "millimeter") {   //yard start
        result.innerHTML = `${numberDOM.value} yard/yd = ${numberDOM.value *  914.4} millimeter/mm`
    }else if (funit == "yard" && sunit == "centimeter") {
        result.innerHTML = `${numberDOM.value} yard/yd = ${numberDOM.value * 91.44} centimeter/cm`
    }else if (funit == "yard" && sunit == "meter") {
        result.innerHTML = `${numberDOM.value} yard/yd = ${numberDOM.value / 1.0936132983377} meter/m`
    }else if (funit == "yard" && sunit == "kilometer") {
        result.innerHTML = `${numberDOM.value} yard/yd = ${numberDOM.value / 1093.6132983377} kilometer/km`
    }else if (funit == "yard" && sunit == "inch") {
        result.innerHTML = `${numberDOM.value} yard/yd = ${numberDOM.value * 36} inch/in`
    }else if (funit == "yard" && sunit == "feet") {
        result.innerHTML = `${numberDOM.value} yard/yd = ${numberDOM.value * 3} feet/ft`
    }else if (funit == "yard" && sunit == "mile") {      //yard end
        result.innerHTML = `${numberDOM.value} yard/yd = ${numberDOM.value / 1760} mile/mi`
    }else if (funit == "mile" && sunit == "millimeter") {  //mile start
        result.innerHTML = `${numberDOM.value} mile/mi = ${numberDOM.value * 1609344} millimeter/mm`         
    }else if (funit == "mile" && sunit == "centimeter") {
        result.innerHTML = `${numberDOM.value} mile/mi = ${numberDOM.value * 160934.4} centimeter/cm`         
    }else if (funit == "mile" && sunit == "meter") {
        result.innerHTML = `${numberDOM.value} mile/mi = ${numberDOM.value * 1609.344} meter/m`         
    }else if (funit == "mile" && sunit == "kilometer") {
        result.innerHTML = `${numberDOM.value} mile/mi = ${numberDOM.value * 1.609344} kilometer/km`         
    }else if (funit == "mile" && sunit == "inch") {
        result.innerHTML = `${numberDOM.value} mile/mi = ${numberDOM.value * 63360} inch/in`         
    }else if (funit == "mile" && sunit == "feet") {  
        result.innerHTML = `${numberDOM.value} mile/mi = ${numberDOM.value * 5280} feet/ft`    
    }else if (funit == "mile" && sunit == "yard") {     
        result.innerHTML = `${numberDOM.value} mile/mi = ${numberDOM.value * 1760} yard/yd`     
    }   //mile end

} 
// LENGTH UNITS CONVERTER - START

// SHOW WEIGHT PAGE - START 
function showWeightPage() {
    let weightPageDOM = document.querySelector("#weight-page");
    if (weightPageDOM.style.display === "none") {
        weightPageDOM.style.display = "block";
    } else {
        weightPageDOM.style.display = "none";
    }
}
// SHOW WEIGHT PAGE - END


// WEIGHT UNITS CONVERTER - START
// funit = FirstUnit , sunit = SecondUnit
function calculateWeight(funit, sunit) {
    let weightDOM = document.querySelector("#weightInput");
    funit = document.querySelector("#weightFrom").value;
    sunit = document.querySelector("#weightTo").value;
    let resultWeight = document.querySelector("#weight-result");
    if(funit == "milligram" && sunit == "milligram" ||
        funit == "gram" && sunit == "gram" ||
        funit == "kilogram" && sunit == "kilogram" ||
        funit == "ounce" && sunit == "ounce" ||
        funit == "pound" && sunit == "pound") 
    {
        resultWeight.innerHTML = `${weightDOM.value} `
    } else if (funit == "milligram" && sunit == "gram") {       //milligram start
        resultWeight.innerHTML = `${weightDOM.value} milligram/mg = ${weightDOM.value / 1000} gram/g`
    }else if (funit == "milligram" && sunit == "kilogram") {
        resultWeight.innerHTML = `${weightDOM.value} milligram/mg = ${weightDOM.value / 1000000} kilogram/kg`
    }else if (funit == "milligram" && sunit == "ounce") {
        resultWeight.innerHTML = `${weightDOM.value} milligram/mg = ${weightDOM.value / 28349.523125} ounce/oz`
    }else if (funit == "milligram" && sunit == "pound") {       //milligram end
        resultWeight.innerHTML = `${weightDOM.value} milligram/mg = ${weightDOM.value / 453592.43} pound/lb`
    }else if (funit == "gram" && sunit == "milligram") {        //gram start
        resultWeight.innerHTML = `${weightDOM.value} gram/g = ${weightDOM.value * 1000} milligram/mg`
    }else if (funit == "gram" && sunit == "kilogram") {
        resultWeight.innerHTML = `${weightDOM.value} gram/g = ${weightDOM.value / 1000} kilogram/kg`
    }else if (funit == "gram" && sunit == "ounce") {            
        resultWeight.innerHTML = `${weightDOM.value} gram/g = ${weightDOM.value / 28.349523125} ounce/oz`
    }else if (funit == "gram" && sunit == "pound") {            //gram end
        resultWeight.innerHTML = `${weightDOM.value} gram/g = ${weightDOM.value / 453.59243} pound/lb`
    }else if (funit == "kilogram" && sunit == "milligram") {    //kilogram start
        resultWeight.innerHTML = `${weightDOM.value} kilogram/kg = ${weightDOM.value * 1000000} milligram/mg`
    }else if (funit == "kilogram" && sunit == "gram") {
        resultWeight.innerHTML = `${weightDOM.value} kilogram/kg = ${weightDOM.value * 1000} gram/g`
    }else if (funit == "kilogram" && sunit == "ounce") {
        resultWeight.innerHTML = `${weightDOM.value} kilogram/kg = ${weightDOM.value * 35.27396194958} ounce/oz`
    }else if (funit == "kilogram" && sunit == "pound") {        //kilogram end
        resultWeight.innerHTML = `${weightDOM.value} ounce/oz = ${weightDOM.value * 2.2046223302272} pound/lb`
    }else if (funit == "ounce" && sunit == "milligram") {       //ounce start    
        resultWeight.innerHTML = `${weightDOM.value} ounce/oz = ${weightDOM.value * 28349.523125} milligram/mg`
    }else if (funit == "ounce" && sunit == "gram") {        
        resultWeight.innerHTML = `${weightDOM.value} ounce/oz = ${weightDOM.value * 28.349523125} gram/g`
    }else if (funit == "ounce" && sunit == "kilogram") {        
        resultWeight.innerHTML = `${weightDOM.value} ounce/oz = ${weightDOM.value / 35.27396194958} kilogram/kg`
    }else if (funit == "ounce" && sunit == "pound") {           //ounce end
        resultWeight.innerHTML = `${weightDOM.value} ounce/oz = ${weightDOM.value / 16} pound/lb`
    }else if (funit == "pound" && sunit == "milligram") {       //pound start
        resultWeight.innerHTML = `${weightDOM.value} pound/lb = ${weightDOM.value * 453592.43} milligram/mg`
    }else if (funit == "pound" && sunit == "gram") {        
        resultWeight.innerHTML = `${weightDOM.value} pound/lb = ${weightDOM.value * 453.59243} gram/g`
    }
    else if (funit == "pound" && sunit == "kilogram") {        
        resultWeight.innerHTML = `${weightDOM.value} pound/lb = ${weightDOM.value / 2.2046223302272} kilogram/kg`
    }
    else if (funit == "pound" && sunit == "ounce") {            //pound end
        resultWeight.innerHTML = `${weightDOM.value} pound/lb = ${weightDOM.value * 16} ounce/oz`
    }


}
// WEIGHT UNITS CONVERTER - END

// SHOW TEMPERATURE PAGE - START

function showTemperaturePage() {
    let temperaturePageDOM = document.querySelector("#temperature-page");
    if (temperaturePageDOM.style.display === "none") {
        temperaturePageDOM.style.display = "block";
    } else {
        temperaturePageDOM.style.display = "none";
    }
}
// SHOW TEMPERATURE PAGE - END

// TEMPERATURE UNITS CONVERTER - START
// funit = FirstUnit , sunit = SecondUnit
function calculateTemperature(funit, sunit) {
    funit = document.querySelector("#temperatureFrom").value;
    sunit = document.querySelector("#temperatureTo").value;
    let resultTemperature = document.querySelector("#temperature-result");
    let temperatureDOM = document.querySelector("#temperatureInput");
    if(funit == "celsius" && sunit == "celsius" ||
        funit == "fahrenheit" && sunit == "fahrenheit" ||
        funit == "kelvin" && sunit == "kelvin" )
    {
        resultTemperature.innerHTML = `${temperatureDOM.value} `
    }else if (funit == "celsius" && sunit == "fahrenheit") {
        resultTemperature.innerHTML = `${temperatureDOM.value} celsius/°C = ${temperatureDOM.value * 9/5 + 32} fahrenheit/°F`
    }else if (funit == "celsius" && sunit == "kelvin") {
        resultTemperature.innerHTML = `${temperatureDOM.value} celsius/°C = ${temperatureDOM.value * 1 + 273.15} kelvin/K`
    }else if (funit == "fahrenheit" && sunit == "celsius") {
        resultTemperature.innerHTML = `${temperatureDOM.value} fahrenheit/°F = ${(temperatureDOM.value - 32) * 5/9} celsius/°C`
    }else if (funit == "fahrenheit" && sunit == "kelvin") {
        resultTemperature.innerHTML = `${temperatureDOM.value} fahrenheit/°F = ${(temperatureDOM.value - 32) * 5/9 + 273.15} kelvin/K`
    }else if (funit == "kelvin" && sunit == "celsius") {
        resultTemperature.innerHTML = `${temperatureDOM.value} kelvin/K = ${temperatureDOM.value - 273.15} celsius/°C`
    }else if (funit == "kelvin" && sunit == "fahrenheit") {
        resultTemperature.innerHTML = `${temperatureDOM.value} kelvin/K = ${(temperatureDOM.value - 273.15) * 9/5 + 32} fahrenheit/°F`
    }

}
// TEMPERATURE UNITS CONVERTER - END
