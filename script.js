//First
console.log('First');
let arrF = [1, 2, 3, 4, 5];
for(let i = 0; i < arrF.length; i++) {
    console.log(arrF[i]);
}

//Second
console.log('Second');
let arrS = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let a = 0; a < arrS.length; a++) {
    if(arrS[a] < -3 && arrS[a] > -10){
        console.log(arrS[a]);
    }
}

//Third
console.log('Third');
let arrTF = [];
console.log('For');
for(let b = 23; b <= 57; b++) {
    arrTF.push(b);
}
console.log(arrTF);
console.log('while')
let arrTW = [];
let c = 23;
while(c <= 57){
    arrTW.push(c);
    c++;
}
console.log(arrTW);
let resultT = 0;
for(d = 0; d < arrTF.length; d++) {
    resultT = resultT + arrTF[d];
}
console.log('Сумма чисел данного массива равна ' + resultT);
