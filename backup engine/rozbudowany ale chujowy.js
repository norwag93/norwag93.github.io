var calcMemory = {
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                     //   CALCULATOR MEMORY   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    // DisplayValues
    screenNumber: 0,
    screenArray: [0],
    // Input number
    inputNumber: 0,
    // Arrays in memory
    memoryArray1: [],
    memoryArray2: [],  
    memoryArray3: [0],  
    memoryArray4: [0],
    memoryArray5: [],
    memoryArray6: [],
    memoryArray7: [],
    memoryArray8: [],
    memoryArray9: [],
    
    // Numbers in memory
    memoryNumber1: 0,
    memoryNumber2: 0,
    memoryNumber3: 0,
    memoryNumber4: 0,
    memoryNumber5: 0,
    
    // String in memory // for converting numbers into array
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
    equalityValue: false,         // value 8, for test 
    // This function clears the memory when the c / ce button is pressed
    memoryReset: function() {
        this.inputNumber = 0;
        this.screenNumber = 0;
        this.screenArray = [0];
        this.memoryArray1 = [];
        this.memoryArray2 = [];
        this.memoryArray3 = [0];
        this.memoryArray4 = [0];
        this.memoryArray5 = [];
        this.memoryArray6 = [];
        this.memoryArray7 = [];
        this.memoryArray8 = [];
        this.memoryArray9 = [];
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
        if (this.screenArray[0] !== 0) {
        this.screenArray.push(this.inputNumber);
            } else if (this.screenArray[0] === 0 && this.screenArray[1] !== '.') {
                this.screenArray = [];
                this.screenArray.push(this.inputNumber);
            } else if (this.screenArray[0] === 0 && this.screenArray[1] === '.') {
                this.screenArray.push(this.inputNumber);
            }
    }
        
    else if ((this.screenArray.length < 9 || (this.screenArray.length < 10 && this.screenArray.indexOf('.') !== -1)) && this.inputNumber === 0 && this.screenArray.length !== 0 && this.screenArray[1] !== '.' && this.inputNumber !== '.') {  
        if (this.screenArray[0] !== 0) {
        this.screenArray.push(this.inputNumber);
            } else if (this.screenArray[0] === 0 && this.screenArray[1] !== '.') {
                this.screenArray = [];
                this.screenArray.push(this.inputNumber);
            } else if (this.screenArray[0] === 0 && this.screenArray[1] === '.') {
                this.screenArray.push(this.inputNumber);
            }
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
        
    } else if(this.screenArray.length < 1 && this.inputNumber === 0){

        this.screenArray.push(0); 
    }
        
    this.inputNumber = 0;
        if(this.screenArray.length === 0) {
    document.getElementById('display').textContent = 0;
        } else {
            document.getElementById('display').textContent = this.screenArray.join('');
        }

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

        

        if (this.memoryArray1.length === 0) {
            this.memoryArray1 = this.screenArray;
        } else if ((this.memoryArray1.length !== 0 && this.screenArray.length !== 0 && this.memoryArray2.length === 0) || this.memoryArray1 === this.memoryArray9){
            this.memoryArray2 = this.screenArray;
        }
        this.screenArray = [0];

        
        
        if (this.memoryArray1.length !== 0 && this.memoryArray2.length !== 0) {
            this.memoryArray3 = this.memoryArray1;
            this.memoryArray4 = this.memoryArray2;
            this.memoryArray1 = [0];
        } 
        
        
        
        
        if (this.memoryArray1.length !== 0 && this.memoryArray2 === 0) {
            document.getElementById('display').textContent = this.memoryArray1.join('');

        }
        
        

        
        
        
    },
                                
    decisionEngine: function() {
        
        this.valueSwitch();
        
        if (this.powerValue === false && this.squareRootValue === false && this.percentValue === false && this.divisionValue === false && this.multiplicationValue === false && this.additionValue === true && this.substractionValue === false) {
        this.additionEngine();
        }
        
        if (this.powerValue === false && this.squareRootValue === false && this.percentValue === false && this.divisionValue === false && this.multiplicationValue === false && this.additionValue === false && this.substractionValue === true) {
        this.substractionEngine();
        }
        
        if (this.powerValue === false && this.squareRootValue === false && this.percentValue === false && this.divisionValue === false && this.multiplicationValue === true && this.additionValue === false && this.substractionValue === false) {
        this.multiplicationEngine();
        }
        
        if (this.powerValue === false && this.squareRootValue === false && this.percentValue === false && this.divisionValue === true && this.multiplicationValue === false && this.additionValue === false && this.substractionValue === false) {
        this.divisionEngine();
        }
        
    },
    
    
    
    
    
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                     //   CALCULATION ENGINE   //
///////////////////////////////////////////////////////////////////////////////////////////////////////    
    
    
   divisionEngine: function() {

        this.memoryNumber1 = parseFloat(this.memoryArray3.join(''));
        this.memoryNumber2 = parseFloat(this.memoryArray4.join(''));
        
        
        this.memoryNumber3 = this.memoryNumber1 / this.memoryNumber2;
        
        this.memoryString1 = this.memoryNumber3.toString();
        this.memoryArray9 = this.memoryString1.split('');
        if (this.memoryArray2.length !== 0 && this.memoryArray9.length !== 0) {
        document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
        this.memoryArray1 = this.memoryArray9;
        this.memoryArray8 = this.memoryArray9;
        }
        
    },
    
    
    multiplicationEngine: function() {

        this.memoryNumber1 = parseFloat(this.memoryArray3.join(''));
        this.memoryNumber2 = parseFloat(this.memoryArray4.join(''));
        
        
        this.memoryNumber3 = this.memoryNumber1 * this.memoryNumber2;
        
        this.memoryString1 = this.memoryNumber3.toString();
        this.memoryArray9 = this.memoryString1.split('');
        if (this.memoryArray2.length !== 0 && this.memoryArray9.length !== 0) {
        document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
        this.memoryArray1 = this.memoryArray9;
        this.memoryArray8 = this.memoryArray9;
        }
        
    },


    
    additionEngine: function() {

        
        this.memoryNumber1 = parseFloat(this.memoryArray3.join(''));
        this.memoryNumber2 = parseFloat(this.memoryArray4.join(''));
        
        /*if (this.screenArray[0] === 0 && this.memoryArray2[0] === 0) {
            this.memoryArray7 = this.memoryArray8;
        }
        if (this.memoryArray2[0] === 0 && this.memoryArray7 == this.memoryArray8) {
            this.memoryArray4 = this.memoryArray8;
        }
        */
        //if (this.memoryArray4 === this.memoryArray8)
        
        this.memoryNumber3 = this.memoryNumber1 + this.memoryNumber2;
        
        
        
        this.memoryString1 = this.memoryNumber3.toString();
        this.memoryArray9 = this.memoryString1.split('');
        if (this.memoryArray2.length !== 0 && this.memoryArray9.length !== 0) {
        document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
        this.memoryArray1 = this.memoryArray9;
        this.memoryArray8 = this.memoryArray9;
        }

    },
   
    
    
    substractionEngine: function() {

        this.memoryNumber1 = parseFloat(this.memoryArray3.join(''));
        this.memoryNumber2 = parseFloat(this.memoryArray4.join(''));
        
        
        if (this.memoryArray2 !== this.memoryArray9) {
        this.memoryNumber3 = this.memoryNumber1 - this.memoryNumber2;
        } else if (this.memoryArray2 === this.memoryArray9){
            this.memoryNumber3 = this.memoryNumber2 - this.memoryNumber1;
        }
        this.memoryString1 = this.memoryNumber3.toString();
        this.memoryArray9 = this.memoryString1.split('');
        if (this.memoryArray2.length !== 0 && this.memoryArray9.length !== 0) {
        document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
        this.memoryArray1 = this.memoryArray9;
        this.memoryArray8 = this.memoryArray9;
        }
    },

    equalityEngine: function() {


        
        
        this.memoryArray3 = this.memoryArray1;
        
        this.decisionEngine();

        //this.memoryArray4 = [];
        //this.screenArray = [0];


        
    },
  
   consoleCheck: function(){ 
    
console.log('screenNumber ' + this.screenNumber);
console.log('screenArray ' + this.screenArray);
console.log('inputNumber ' + this.inputNumber);
console.log('array1 ' + this.memoryArray1);
console.log('array2 ' + this.memoryArray2);
console.log('array3 ' + this.memoryArray3);
console.log('array4 ' + this.memoryArray4);
console.log('array5 ' + this.memoryArray5);
console.log('array6 ' + this.memoryArray6);
console.log('array7 ' + this.memoryArray7);
console.log('array8 ' + this.memoryArray8);
console.log('array9 ' + this.memoryArray9);
console.log('number1 ' + this.memoryNumber1);
console.log('number2 ' + this.memoryNumber2);
console.log('number3 ' + this.memoryNumber3);
console.log('number4 ' + this.memoryNumber4);
console.log('number5 ' + this.memoryNumber5);

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
                                                    calcMemory.consoleCheck();
        
});

document.getElementById('squareRoot').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 1;
                                                    calcMemory.memoryEngine();
        
});

document.getElementById('percentage').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 2;
                                                    calcMemory.memoryEngine();
        
});

document.getElementById('division').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 3;
                                                    calcMemory.memoryEngine();
                                                    calcMemory.decisionEngine();
});

document.getElementById('multiplication').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 4;
                                                    calcMemory.memoryEngine();
                                                    calcMemory.decisionEngine();
});

document.getElementById('addition').addEventListener('click', function() {   
                                                    calcMemory.switchNumber = 5;  
                                                    calcMemory.memoryEngine();
                                                    calcMemory.decisionEngine();
});

document.getElementById('substraction').addEventListener('click', function() {
                                                    calcMemory.switchNumber = 6;
                                                    calcMemory.memoryEngine();
                                                    calcMemory.decisionEngine();
});

document.getElementById('equality').addEventListener('click', function() {
                                                    
                                                    if (calcMemory.switchNumber !== 8){
                                                        calcMemory.memoryEngine();
                                                        calcMemory.decisionEngine();
                                                    } else if (calcMemory.switchNumber === 8){
                                                        calcMemory.equalityEngine();
                                                    }
                                                    calcMemory.switchNumber = 8;
                        
                                                    
                                                    
        
});



///////////////////////////////////////////////////////////////////////////////////////////////////////


document.getElementById('display').textContent = calcMemory.screenNumber;

/*

console.log(this.screenNumber);
console.log(this.screenArray);
console.log(this.inputNumber);
console.log(this.memoryArray1);
console.log(this.memoryArray2);
console.log(this.memoryArray3);
console.log(this.memoryArray4);
console.log(this.memoryArray5);
console.log(this.memoryArray6);
console.log(this.memoryArray7);
console.log(this.memoryArray8);
console.log(this.memoryArray9);
console.log(this.memoryNumber1);
console.log(this.memoryNumber2);
console.log(this.memoryNumber3);
console.log(this.memoryNumber4);
console.log(this.memoryNumber5);

*/