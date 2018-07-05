var calcMemory = {
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                     //   CALCULATOR MEMORY   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    // DisplayValues
    screenNumber: 0,
    screenArray: [],
    // Input number
    inputNumber: 0,
    // Arrays in memory
    memoryArray1: [],
    memoryArray2: [],  // memoryArray2 and memoryArray3 works as one unit, 
    memoryArray3: [],  // do not use memoryArray3 for any other purpose
    memoryArray4: [],
    
    // Numbers in memory
    memoryNumber1: 0,
    memoryNumber2: 0,
    memoryNumber3: 0,
    memoryNumber4: 0,
    memoryNumber5: 0,
    
    // String in memory // for converting memoryNumber3 into array
    memoryString1: '',
    
    // Value of function buttons
    switchNumber: 7,              // if 7 all false
    powerValue: false,            // if 0 only powerValue is true
    squareRootValue: false,       // if 1 only squareRootValue is true
    percentValue: false,          // if 2 only percentValue is true
    divisionValue: false,         // if 3 only divisionValue is true
    multiplicationValue: false,   // if 4 only multiplicationValue is true
    additionValue: false,         // if 5 only additionValue is true
    substractionValue: false,     // if 6 only substractionValue is true
    
    // This function clears the memory when the c / ce button is pressed
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
        this.memoryString1 = '';
        this.switchNumber = 7;
        this.powerValue = false;
        this.squareRootValue = false;
        this.percentValue = false;
        this.divisionValue = false;
        this.multiplicationValue = false;
        this.additionValue = false;
        this.substractionValue = false;
        },

    
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                     //   NUMERIC KEYBOARD ENGINE   //
///////////////////////////////////////////////////////////////////////////////////////////////////////    
   
    
    // This function take input from the keyboard and transform it into useful form
    calcNumeric: function() {

        
    if ((this.screenArray.length < 9 || (this.screenArray.length < 10 && this.screenArray.indexOf('.') !== -1)) && this.inputNumber !== 0 && this.inputNumber !== '.'){
        this.screenArray.push(this.inputNumber);
        }
        
    else if ((this.screenArray.length < 9 || (this.screenArray.length < 10 && this.screenArray.indexOf('.') !== -1)) && this.inputNumber === 0 && this.screenArray.length !== 0 && this.screenArray[1] !== '.' && this.inputNumber !== '.') {  
        this.screenArray.push(this.inputNumber);
        }
        
    else if ((this.screenArray.length < 9 || (this.screenArray.length < 10 && this.screenArray.indexOf('.') !== -1)) && this.inputNumber === 0 && this.screenArray.length !== 0 && this.screenArray[1] === '.' && this.inputNumber !== '.') {  
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
    console.log(this.screenArray);
    },
    
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                     //   MEMORY CONTROL   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
    

    // This function control the value true/false of function buttons
    valueSwitch: function() {
        if (this.switchNumber === 0) {
            this.powerValue = true;
            this.squareRootValue = false;
            this.percentValue = false;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = false;
        } else if (this.switchNumber === 1) {
            this.powerValue = false;
            this.squareRootValue = true;
            this.percentValue = false;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = false;
        } else if (this.switchNumber === 2) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.percentValue = true;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = false;
        } else if (this.switchNumber === 3) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.percentValue = false;
            this.divisionValue = true;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = false;
        } else if (this.switchNumber === 4) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.percentValue = false;
            this.divisionValue = false;
            this.multiplicationValue = true;
            this.additionValue = false;
            this.substractionValue = false;
        } else if (this.switchNumber === 5) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.percentValue = false;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = true;
            this.substractionValue = false;
        } else if (this.switchNumber === 6) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.percentValue = false;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = true;
        } else if (this.switchNumber === 7) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.percentValue = false;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = false;
        }
    },
    
    // This function control memory arrays, save input to them and clean them if necessary
    memoryEngine: function() {
        

        
        this.valueSwitch();

        
        
        if (this.memoryArray1.length === 0 && this.screenArray.length !== 0) {
            for (var i = 0; i < this.screenArray.length; i++) {
                this.memoryArray1.push(this.screenArray[i]);
            }
            this.screenArray = [];
        } else if (this.memoryArray1.length === 0 && this.screenArray.length === 0) {
            this.memoryArray1[0] = 0;
        }if (this.memoryArray1.length !== 0 && (this.memoryArray2.length === 0 || this.memoryArray2[0] === 0) && this.screenArray.length !== 0) {
            for (var a = 0; a < this.screenArray.length; a++) {
                this.memoryArray2[0] = this.screenArray[0]
                this.memoryArray2.push(this.screenArray[1 + a]);
                this.memoryArray3.push(this.memoryArray2[a]);
                 
            }
            this.memoryArray2 = [];
            for (var b = 0; b < this.screenArray.length; b++) {
                this.memoryArray2.push(this.memoryArray3[b]);
            }
            this.memoryArray3 = [];
        } else if (this.memoryArray1.length !== 0 && this.memoryArray2.length === 0 && (this.memoryArray2.length === 0 || this.memoryArray2[0] === 0) && this.screenArray.length === 0) {
            this.memoryArray2[0] = 0;
        }
        
        
        
        
        
        if (this.powerValue === false && this.squareRootValue === false && this.percentValue === false && this.divisionValue === false && this.multiplicationValue === false && this.additionValue === true && this.substractionValue === false) {
            this.additionEngine();
            document.getElementById('display').textContent = this.memoryNumber3;
            
            this.memoryArray2 = this.memoryArray4;

            this.memoryArray4 = [];
            this.memoryArray1 = [];
            this.memoryNumber3 = 0;
            console.log(this.memoryArray4);
            
        } else if (this.powerValue === false && this.squareRootValue === false && this.percentValue === false && this.divisionValue === false && this.multiplicationValue === false && this.additionValue === false && this.substractionValue === true) {
            this.substractionEngine();
            document.getElementById('display').textContent = this.memoryNumber3;
            
            this.memoryArray2 = this.memoryArray4;

            this.memoryArray4 = [];
            this.memoryArray1 = [];
            
            console.log(this.memoryArray4);
        
        }else if (this.powerValue === false && this.squareRootValue === false && this.percentValue === false && this.divisionValue === false && this.multiplicationValue === true && this.additionValue === false && this.substractionValue === false) {
            this.multiplicationEngine();
            document.getElementById('display').textContent = this.memoryNumber3;
            
            this.memoryArray2 = this.memoryArray4;



            console.log('multi');
        }
        
        
        

        console.log('memoryNum1  ' + this.memoryNumber1);
        console.log('memoryNum2  ' + this.memoryNumber2);
        console.log('memoryNum3  ' + this.memoryNumber3);


        
        if (this.screenNumber !== 0) {
            this.valueSwitch();
            console.log('hehe')
        }
        
        this.screenArray = [];
        
    },
                                

    
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                     //   CALCULATION ENGINE   //
///////////////////////////////////////////////////////////////////////////////////////////////////////    
    
    
    
    multiplicationEngine: function() {

        this.memoryNumber1 = parseFloat(this.memoryArray1.join(''));
        
        this.memoryNumber2 = parseFloat(this.memoryArray2.join(''));
        this.memoryNumber3 = this.memoryNumber1 * this.memoryNumber2;
        
        this.memoryString1 = this.memoryNumber3.toString();
        this.memoryArray4 = this.memoryString1.split('');
    },
    
    
    
    additionEngine: function() {
        
        
        this.memoryNumber1 = parseFloat(this.memoryArray1.join(''));
        this.memoryNumber2 = parseFloat(this.memoryArray2.join(''));
        this.memoryNumber3 = this.memoryNumber1 + this.memoryNumber2;
        this.memoryString1 = this.memoryNumber3.toString();
        this.memoryArray4 = this.memoryString1.split('');
    },
        
    substractionEngine: function() {
        this.memoryNumber1 = parseFloat(this.memoryArray1.join(''));
        this.memoryNumber2 = parseFloat(this.memoryArray2.join(''));
        if (this.memoryNumber2 !== 0) {
            this.memoryNumber3 = this.memoryNumber1 - this.memoryNumber2;
        } else if (this.memoryNumber2 === 0) {
            this.memoryNumber3 = this.memoryNumber2 - this.memoryNumber1;
        }
        
        this.memoryString1 = this.memoryNumber3.toString();
        this.memoryArray4 = this.memoryString1.split('');        
    },
    
    
    

};




///////////////////////////////////////////////////////////////////////////////////////////////////////
//                    ///   BUTONS INPUT   ///
///////////////////////////////////////////////////////////////////////////////////////////////////////

// C/CE BUTTON
document.getElementById('ce').addEventListener('click', function() {
        calcMemory.memoryReset();
        document.getElementById('display').textContent = calcMemory.screenNumber;
});

// NUMERIC KEYBOARD
document.getElementById('number1').addEventListener('click', function() {
                                                    calcMemory.inputNumber = 1;
                                                    calcMemory.calcNumeric();
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
                                                    });

document.getElementById('dot').addEventListener('click', function() {
                                                    calcMemory.inputNumber = '.';
                                                    calcMemory.calcNumeric();       
});

// FUNCTION BUTTONS

document.getElementById('power').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 0;
                                                    calcMemory.memoryEngine();
                                                    console.log('switchValue' + calcMemory.switchNumber);
        
});

document.getElementById('squareRoot').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 1;
                                                    calcMemory.memoryEngine();
                                                    console.log('switchValue' + calcMemory.switchNumber);
        
});

document.getElementById('percentage').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 2;
                                                    calcMemory.memoryEngine();
                                                    console.log('switchValue' + calcMemory.switchNumber);
        
});

document.getElementById('division').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 3;
                                                    calcMemory.memoryEngine();
                                                    console.log('switchValue' + calcMemory.switchNumber);
        
});

document.getElementById('multiplication').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 4;
                                                    calcMemory.memoryEngine();
                                                    console.log('switchValue' + calcMemory.switchNumber);
        
});

document.getElementById('addition').addEventListener('click', function() {   
                                                    calcMemory.switchNumber = 5;  
                                                    calcMemory.memoryEngine();
                                                    console.log('switchValue' + calcMemory.switchNumber);        
});

document.getElementById('substraction').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 6;
                                                    calcMemory.memoryEngine();
                                                    console.log('switchValue' + calcMemory.switchNumber);        
});

document.getElementById('equality').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 7;
                                                    console.log('switchValue' + calcMemory.switchNumber);
        
});



///////////////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById('display').textContent = calcMemory.screenNumber;
