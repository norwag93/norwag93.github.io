var calcMemory = {
    // DisplayValues
    screenNumber: 0,
    screenArray: [],
    // Input number
    inputNumber: 0,
    // Arrays in memory
    memoryArray1: [],
    memoryArray2: [],
    memoryArray3: [],
    
    // Numbers in memory
    memoryNumber1: 0,
    memoryNumber2: 0,
    memoryNumber3: 0,
    memoryNumber4: 0,
    memoryNumber5: 0,
    
    // Value of function buttons
    powerValue: false,
    squareRootValue: false,
    percentValue: false,
    divisionValue: false,
    multiplicationValue: false,
    additionValue: false,
    minusValue: false,
    
    // Memory reset function
    memoryReset: function() {
        this.inputNumber = 0;
        this.screenNumber = 0;
        this.screenArray = [];
        this.memoryArray1 = [];
        this.memoryArray2 = [];
        this.memoryArray3 = [];
        this.memoryNumber1 = 0;
        this.memoryNumber2 = 0;
        this.memoryNumber3 = 0;
        this.memoryNumber4 = 0;
        this.memoryNumber5 = 0;
        this.powerValue = false;
        this.squareRootValue = false;
        this.percentValue = false;
        this.divisionValue = false;
        this.multiplicationValue = false;
        this.additionValue = false;
        this.minusValue = false;
        },
    
    // Function for reading keyboard and displaying it
    calcNumeric: function() {

        (this.screenArray.length === 9 && this.screenArray.length < 10 && this.screenArray.indexOf('.'))
        
    if (this.screenArray.length < 9 && this.inputNumber !== 0 && this.inputNumber !== '.'){
        this.screenArray.push(this.inputNumber);    
        }
        
    else if (this.screenArray.length < 9 && this.inputNumber === 0 && this.screenArray.length !== 0 && this.screenArray[1] !== '.' && this.inputNumber !== '.') {  
        this.screenArray.push(this.inputNumber);
        }
        
    else if (this.screenArray.length < 9 && this.inputNumber === 0 && this.screenArray.length !== 0 && this.screenArray[1] === '.' && this.inputNumber !== '.') {  
        this.screenArray.push(this.inputNumber);   
    }
        
    else if (this.inputNumber === '.') {
        if (this.screenArray.length < 8 && this.screenArray.length !== 0 && this.screenArray.indexOf('.') === -1) {
            this.screenArray.push('.');
        }
        
        else if (this.screenArray.length === 0 && this.screenArray.indexOf('.') === -1) {
            this.screenArray.push(0);
            this.screenArray.push('.');
        }
        
        else if (this.screenArray.length === 0 && this.screenArray.indexOf('.') === -1) {
            this.screenArray.push(0);
            
        }
        
        else if (this.screenArray.length < 9 && this.screenArray.length !== 0 && this.screenArray.indexOf('.') === -1) {
            this.screenArray.push(this.inputNumber);
        }
        
    }
        
    this.inputNumber = 0;
        if(this.screenArray.length === 0) {
    document.getElementById('display').textContent = 0;
        } else {
            document.getElementById('display').textContent = this.screenArray.join('');
        }
    },
};



// C/CE button
document.getElementById('ce').addEventListener('click', function() {
        calcMemory.memoryReset();
        document.getElementById('display').textContent = calcMemory.screenNumber;
});


///////////////////////////////////////////////////////////////////////////////////////////////////////
//                    BUTONS FROM
///////////////////////////////////////////////////////////////////////////////////////////////////////
document.getElementById('number1').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 1;
                                                    calcMemory.calcNumeric();
                                                    console.log(calcMemory.inputNumber);
                                                    });


document.getElementById('number2').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 2;
                                                    calcMemory.calcNumeric();
                                                    });

document.getElementById('number3').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 3;
                                                    calcMemory.calcNumeric();
                                                    });


document.getElementById('number4').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 4;
                                                    calcMemory.calcNumeric();
                                                    });

document.getElementById('number5').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 5;
                                                    calcMemory.calcNumeric();
                                                    });


document.getElementById('number6').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 6;
                                                    calcMemory.calcNumeric();
                                                    });

document.getElementById('number7').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 7;
                                                    calcMemory.calcNumeric();
                                                    });


document.getElementById('number8').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 8;
                                                    calcMemory.calcNumeric();
                                                    });

document.getElementById('number9').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 9;
                                                    calcMemory.calcNumeric();
                                                    });

document.getElementById('number0').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 0;
                                                    calcMemory.calcNumeric();
                                                    console.log(calcMemory.inputNumber);
                                                    console.log(calcMemory.screenArray);
                                                    console.log(calcMemory.screenNumber);
                                                    console.log(calcMemory.screenArray.join(''));
                                                    });

document.getElementById('dot').addEventListener('click', function() {
                                                    calcMemory.inputNumber = '.';
                                                    calcMemory.calcNumeric();
    
    
    
});
///////////////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById('display').textContent = calcMemory.screenNumber;
