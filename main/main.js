function LCD(input) {

    var numbersArr=splitNumbers(input);
    var LCDNumberIcons=buildLCDNumberIcons();
    var LCDLinesArr = bulidLCDLinesArr(numbersArr, LCDNumberIcons);
    var LCDGrid = bulidLCDGrid(LCDLinesArr);

    console.log(LCDGrid);

}

function buildLCDNumberIcons() {
    var LCDNumberIcons = [
        ['._. ', '... ', '._. ', '._. ', '... ', '._. ', '._. ', '._. ', '._. ', '._. '],
        ['|.| ', '..| ', '._| ', '._| ', '|_| ', '|_. ', '|_. ', '..| ', '|_| ', '|_| '],
        ['|_| ', '..| ', '|_. ', '._| ', '..| ', '._| ', '|_| ', '..| ', '|_| ', '..| ']
    ];
    return LCDNumberIcons;
}

function splitNumbers(input) {

    var numbersArr;
    numbersArr = input.toString().split('');

    for (var i = 0; i < numbersArr.length; i++) {
        numbersArr[i] = parseInt(numbersArr[i]);
    }

    return numbersArr;
}

function getLines(numbersArr,LCDNumberIcons) {
    var lines='';
    for(var i=0 ; i<numbersArr.length ; i++)
    {
        lines+=LCDNumberIcons[numbersArr[i]];
    }
    return lines

}

function bulidLCDLinesArr(numbersArr, LCDNumberIcons) {

    var LCDLinesArr = [];

    for (var i = 0; i < LCDNumberIcons.length; i++) {

            LCDLinesArr.push(getLines(numbersArr,LCDNumberIcons[i]));


    }
    return LCDLinesArr;
}

function bulidLCDGrid(LCDLinesArr) {

    var LCDGrid = '';

    for (i = 0; i < LCDLinesArr.length; i++) {
        LCDGrid += LCDLinesArr[i] + '\n';
    }

    return LCDGrid;

}


