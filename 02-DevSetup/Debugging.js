'use strict';



const measureKevin = function(){
    const measurement = {
        type: "temp",
        unit: "celsius",
        // FIX THE BUG
        value: Number(prompt("Degree Celsius"))
    }

    // FIND THE BUG
    // console.table(measurement)

    const kevin = measurement.value+ 273;
    return kevin;
};



console.log(measureKevin());