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

//Forth
console.log('Forth');
let arrForth = ['10', '20', '30', '50', '235', '3000'];
for(e = 0; e < arrForth.length; e++) {
    if(arrForth[e][0] === '1' || arrForth[e][0] === '2' || arrForth[e][0] === '5') {
        console.log(arrForth[e]);
    }
}

//Fifth
document.write('Fifth', '<br/>');
let arrFifth = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for(let e = 0; e < arrFifth.length; e++){
    if (arrFifth[e] === 'СБ' || arrFifth[e] === 'ВС') {
        document.write(arrFifth[e].bold() + '\n');
    } else {
        document.write(arrFifth[e] + '\n');
    }
}

//Sixth
console.log('Sixth');
let arrSixth = ['Rita', 'Sasha', 'Anna', 'Valera'];
arrSixth.push(prompt('ВВедите элемент массива'));
console.log(arrSixth);
console.log(arrSixth[arrSixth.length - 1]);

//Seventh
console.log('Seventh');
let arrSeventh = [];
while (true) {
    let f = prompt('Введите число');
    if (f === '' || isNaN(f)) break
    else {
        arrSeventh.push(f);
    }
}
console.log(arrSeventh);
arrSeventh.sort(function(a, b){
    return a - b;
});
console.log(arrSeventh);




