console.log("loading page...");

function weatherDisplay(){
    alert("Loading weather report...")
}

function celcius2Fahrenheit(temp){
    return Math.round(9 / 5 * temp + 32);
}

function fahrenheit2Celcius(temp){
    return Math.round(5 / 9 * (temp - 32));
}

function onTempChange(element){
    console.log("you changed temp " + element.value)
    for(var i=1; i<9; i++){
        var spanTag = document.querySelector("#temp-" + i);
        var tempValue = parseInt(spanTag.innerText);
        if(element.value == "C"){
            spanTag.innerText = fahrenheit2Celcius(tempValue);
        } else {
            spanTag.innerText = celcius2Fahrenheit(tempValue);
        }
    }
}

