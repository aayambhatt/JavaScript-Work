const calcAverage = (a,b,c) => {
    return (a+b+c)/3;
}

let scoreDolphins = calcAverage(44,23,71);
let scoreKoalas = calcAverage(65,54,79);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas){
    if(avgKoalas>= 2*avgDolphins){
        console.log(`Koalas win ${avgKoalas} vs. ${avgDolphins}`);
    }
    else if(avgDolphins>=2*avgKoalas){
        console.log(`Dolphins win ${avgDolphins} vs. ${avgKoalas}`);
    }
    else {
        console.log("No team wins...");
    }
}

checkWinner(scoreDolphins, scoreKoalas);