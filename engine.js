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
    memoryArray1: [0],
    memoryArray2: [],  
    memoryArray3: [],  
    memoryArray4: [],
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
    minusValue: false,          // if 2 only minusValue is true
    divisionValue: false,         // if 3 only divisionValue is true
    multiplicationValue: false,   // if 4 only multiplicationValue is true
    additionValue: false,         // if 5 only additionValue is true
    substractionValue: false,     // if 6 only substractionValue is true
    equalityNumber: 0,         
    // This function clears the memory when the c / ce button is pressed
    memoryReset: function() {
        this.inputNumber = 0;
        this.screenNumber = 0;
        this.screenArray = [0];
        this.memoryArray1 = [0];
        this.memoryArray2 = [];
        this.memoryArray3 = [];
        this.memoryArray4 = [];
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
        this.minusValue = false;
        this.divisionValue = false;
        this.multiplicationValue = false;
        this.additionValue = false;
        this.substractionValue = false;
        this.equalityNumber = 0;
        },

    
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                     //   NUMERIC KEYBOARD ENGINE   //
///////////////////////////////////////////////////////////////////////////////////////////////////////    
   
    
    // This function take input from the keyboard and transform it into useful form
    calcNumeric: function() {

        
    if ((this.screenArray.length < 9 || (this.screenArray.length < 10 && this.screenArray.indexOf('.') !== -1) || (this.screenArray.length < 10 && this.screenArray.indexOf('-') !== -1) || (this.screenArray.length < 11 && this.screenArray.indexOf('-') !== -1 && this.screenArray.indexOf('.') !== -1)) && this.inputNumber !== 0 && this.inputNumber !== '.'){
        if (this.screenArray[0] !== 0) {
        this.screenArray.push(this.inputNumber);
            } else if (this.screenArray[0] === 0 && this.screenArray[1] !== '.') {
                this.screenArray = [];
                this.screenArray.push(this.inputNumber);
            } else if (this.screenArray[0] === 0 && this.screenArray[1] === '.') {
                this.screenArray.push(this.inputNumber);
            }
    }
        
    else if ((this.screenArray.length < 9 || (this.screenArray.length < 10 && this.screenArray.indexOf('.') !== -1) || (this.screenArray.length < 10 && this.screenArray.indexOf('-') !== -1) || (this.screenArray.length < 11 && this.screenArray.indexOf('-') !== -1 && this.screenArray.indexOf('.') !== -1)) && this.inputNumber === 0 && this.screenArray.length !== 0 && this.screenArray[1] !== '.' && this.inputNumber !== '.') {  
        if (this.screenArray[0] !== 0) {
        this.screenArray.push(this.inputNumber);
            } else if (this.screenArray[0] === 0 && this.screenArray[1] !== '.') {
                this.screenArray = [];
                this.screenArray.push(this.inputNumber);
            } else if (this.screenArray[0] === 0 && this.screenArray[1] === '.') {
                this.screenArray.push(this.inputNumber);
            }
        }
        
    else if ((this.screenArray.length < 9 || (this.screenArray.length < 10 && this.screenArray.indexOf('.') !== -1) || (this.screenArray.length < 10 && this.screenArray.indexOf('-') !== -1)) && this.inputNumber === 0 && this.screenArray.length !== 0 && this.screenArray[1] === '.' && this.inputNumber !== '.') {  
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
    if (this.memoryArray4.length === 0) {    
    this.memoryArray1 = this.screenArray;
    } else if (this.memoryArray4.length !== 0) {    
    this.memoryArray2 = this.screenArray;
    }

    },
    
    //slice(0, 10).join('');
    
    minus: function() {
    
        if (this.memoryArray9.length === 0 && this.memoryArray4.length === 0 && this.memoryArray3.length === 0 && this.memoryArray2.length === 0 && this.memoryArray1.indexOf('-') === -1) {
            
            this.memoryArray1.unshift('-');
            if (this.memoryArray1.length > 11){
                document.getElementById('display').textContent = this.memoryArray1.slice(0, 10).join('');
            } else {
            document.getElementById('display').textContent = this.memoryArray1.join('');
            }
        } else if (this.memoryArray9.length === 0 && this.memoryArray4.length === 0 && this.memoryArray3.length === 0 && this.memoryArray2.length === 0 && this.memoryArray1.indexOf('-') !== -1) {
            this.memoryArray1.shift();
            if (this.memoryArray1.length > 11){
                document.getElementById('display').textContent = this.memoryArray1.slice(0, 10).join('');
            } else {
            document.getElementById('display').textContent = this.memoryArray1.join('');
            }
        } else if (this.memoryArray4.length !== 0 && this.memoryArray3.length === 0 && this.memoryArray9.length === 0 && this.memoryArray2.length === 0 && this.memoryArray4.indexOf('-') === -1) {
            this.memoryArray4.unshift('-');
            if (this.memoryArray4.length > 11){
                document.getElementById('display').textContent = this.memoryArray4.slice(0, 10).join('');
            } else {
            document.getElementById('display').textContent = this.memoryArray4.join('');
            }
        } else if (this.memoryArray4.length !== 0 && this.memoryArray3.length === 0 && this.memoryArray9.length === 0 && this.memoryArray2.length === 0 && this.memoryArray4.indexOf('-') !== -1) {
            this.memoryArray4.shift();
            if (this.memoryArray4.length > 11){
                document.getElementById('display').textContent = this.memoryArray4.slice(0, 10).join('');
            } else {
            document.getElementById('display').textContent = this.memoryArray4.join('');
            }
        } else if (this.memoryArray2.indexOf('-') === -1 && this.memoryArray3.length === 0 && this.memoryArray9.length === 0 && this.memoryArray2[0] !== 0) {
            this.memoryArray2.unshift('-');
            if (this.memoryArray2.length > 11){
                document.getElementById('display').textContent = this.memoryArray2.slice(0, 10).join('');
            } else {
            document.getElementById('display').textContent = this.memoryArray2.join('');
            }
        } else if (this.memoryArray2.indexOf('-') !== -1 && this.memoryArray3.length === 0 && this.memoryArray9.length === 0 && this.memoryArray2[0] !== 0) {
            this.memoryArray2.shift();
            if (this.memoryArray2.length > 11){
                document.getElementById('display').textContent = this.memoryArray2.slice(0, 10).join('');
            } else {
            document.getElementById('display').textContent = this.memoryArray2.join('');
            }
        } else if (this.memoryArray4.indexOf('-') === -1 && this.memoryArray1.length === 0 && this.memoryArray2.length === 0) {
            this.memoryArray4.unshift('-');
            if (this.memoryArray4.length > 11){
                document.getElementById('display').textContent = this.memoryArray4.slice(0, 10).join('');
            } else {
            document.getElementById('display').textContent = this.memoryArray4.join('');
            }
        } else if (this.memoryArray4.indexOf('-') !== -1 && this.memoryArray1.length === 0 && this.memoryArray2.length === 0) {
            this.memoryArray4.shift();
            if (this.memoryArray4.length > 11){
                document.getElementById('display').textContent = this.memoryArray4.slice(0, 10).join('');
            } else {
            document.getElementById('display').textContent = this.memoryArray4.join('');
            }
        } else if (this.memoryArray2.indexOf('-') === -1 && this.memoryArray4 === this.memoryArray9 && this.memoryArray1.length === 0 && this.memoryArray2.length !== 0) {
            this.memoryArray2.unshift('-');
            if (this.memoryArray2.length > 11){
                document.getElementById('display').textContent = this.memoryArray2.slice(0, 10).join('');
            } else {
            document.getElementById('display').textContent = this.memoryArray2.join('');
            }
        } else if (this.memoryArray2.indexOf('-') !== -1 && this.memoryArray4 === this.memoryArray9 && this.memoryArray1.length === 0 && this.memoryArray2.length !== 0) {
            this.memoryArray2.shift();
            if (this.memoryArray2.length > 11){
                document.getElementById('display').textContent = this.memoryArray2.slice(0, 10).join('');
            } else {
            document.getElementById('display').textContent = this.memoryArray2.join('');
            }
        }
    },
    
     squareRoot: function() {
    
        if (this.memoryArray9.length === 0 && this.memoryArray4.length === 0 && this.memoryArray3.length === 0 && this.memoryArray2.length === 0 && this.memoryArray4.length === 0) {
            
            //this.memoryArray1
            
            this.memoryNumber5 = parseFloat(this.memoryArray1.join(''));
            
            if (this.memoryNumber5 > 0){
            this.memoryNumber4 = Math.sqrt(this.memoryNumber5);
            this.memoryString1 = this.memoryNumber4.toString();
            this.memoryArray8 = this.memoryString1.split('');
            this.memoryArray1 = this.memoryArray8.slice(0, 9);
            this.screenArray = this.memoryArray8.slice(0, 9);
            this.memoryArray8 = [];
            this.memoryNumber5 = 0;
            this.memoryNumber4 = 0;
            this.memoryString1 = '';
            document.getElementById('display').textContent = this.memoryArray1.join('');
            console.log('here');
            } else {
                document.getElementById('display').textContent = '0';
                this.memoryReset();
            }
            

        
        } else if (this.memoryArray4.length !== 0 && this.memoryArray3.length === 0 && this.memoryArray9.length === 0 && this.memoryArray2.length === 0) {
            
            //this.memoryArray4
            
            this.memoryNumber5 = parseFloat(this.memoryArray4.join(''));
            
            if (this.memoryNumber5 > 0){
            this.memoryNumber4 = Math.sqrt(this.memoryNumber5);
            this.memoryString1 = this.memoryNumber4.toString();
            this.memoryArray8 = this.memoryString1.split('');
            this.memoryArray4 = this.memoryArray8.slice(0, 9);
            this.memoryArray8 = [];
            this.memoryNumber5 = 0;
            this.memoryNumber4 = 0;
            this.memoryString1 = '';
            document.getElementById('display').textContent = this.memoryArray4.join('');
            console.log('here');
            } else {
                document.getElementById('display').textContent = '0';
                this.memoryReset();
            }
        
        
        } else if (this.screenArray === this.memoryArray2 && this.memoryArray3.length === 0 && this.memoryArray9.length === 0 && this.memoryArray2[0] !== 0) {
            
            //this.memoryArray2
            
            this.memoryNumber5 = parseFloat(this.memoryArray2.join(''));
            
            if (this.memoryNumber5 > 0){
            this.memoryNumber4 = Math.sqrt(this.memoryNumber5);
            this.memoryString1 = this.memoryNumber4.toString();
            this.memoryArray8 = this.memoryString1.split('');
            this.memoryArray2 = this.memoryArray8.slice(0, 9);
            this.memoryArray8 = [];
            this.memoryNumber5 = 0;
            this.memoryNumber4 = 0;
            this.memoryString1 = '';
            document.getElementById('display').textContent = this.memoryArray2.join('');
            console.log('here');
            } else {
                document.getElementById('display').textContent = '0';
                this.memoryReset();
            }
        
        
        }else if (this.memoryArray1.length === 0 && this.memoryArray2.length === 0 && this.memoryArray9.length !== 0 && this.memoryArray4.length !== 0) {
            
            //this.memoryArray4
            
            this.memoryNumber5 = parseFloat(this.memoryArray4.join(''));
            
            if (this.memoryNumber5 > 0){
            this.memoryNumber4 = Math.sqrt(this.memoryNumber5);
            this.memoryString1 = this.memoryNumber4.toString();
            this.memoryArray8 = this.memoryString1.split('');
            this.memoryArray4 = this.memoryArray8.slice(0, 9);     
            this.memoryArray9 = this.memoryArray8.slice(0, 9); 
            this.memoryNumber5 = 0;
            this.memoryNumber4 = 0;
            this.memoryString1 = '';
            document.getElementById('display').textContent = this.memoryArray4.join('');
            console.log('here');
            } else {
                document.getElementById('display').textContent = '0';
                this.memoryReset();
            }
        
        
        }else if (this.memoryArray4 === this.memoryArray9 && this.memoryArray1.length === 0 && this.memoryArray2.length !== 0) {
            
            this.memoryNumber5 = parseFloat(this.memoryArray2.join(''));
            
            if (this.memoryNumber5 > 0){
            this.memoryNumber4 = Math.sqrt(this.memoryNumber5);
            this.memoryString1 = this.memoryNumber4.toString();
            this.memoryArray8 = this.memoryString1.split('');
            this.memoryArray2 = this.memoryArray8.slice(0, 9);
            this.memoryNumber5 = 0;
            this.memoryNumber4 = 0;
            this.memoryString1 = '';
            document.getElementById('display').textContent = this.memoryArray2.join('');
            console.log('here');
            } else {
                document.getElementById('display').textContent = '0';
                this.memoryReset();
            }
            
            console.log('AAAAAAAAAAAAAAAAAA');
            
        }
         
        console.log('her123e'); 
    },
    
    
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                     //   MEMORY CONTROL   //
///////////////////////////////////////////////////////////////////////////////////////////////////////
    

    // This function control the value true/false of function buttons
    valueSwitch: function() {
        if (this.switchNumber === 0) {
            this.powerValue = true;
            this.squareRootValue = false;
            this.minusValue = false;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = false;
        } else if (this.switchNumber === 1) {
            this.powerValue = false;
            this.squareRootValue = true;
            this.minusValue = false;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = false;
        } else if (this.switchNumber === 2) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.minusValue = true;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = false;
        } else if (this.switchNumber === 3) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.minusValue = false;
            this.divisionValue = true;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = false;
        } else if (this.switchNumber === 4) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.minusValue = false;
            this.divisionValue = false;
            this.multiplicationValue = true;
            this.additionValue = false;
            this.substractionValue = false;
        } else if (this.switchNumber === 5) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.minusValue = false;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = true;
            this.substractionValue = false;
        } else if (this.switchNumber === 6) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.minusValue = false;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = true;
        } else if (this.switchNumber === 7) {
            this.powerValue = false;
            this.squareRootValue = false;
            this.minusValue = false;
            this.divisionValue = false;
            this.multiplicationValue = false;
            this.additionValue = false;
            this.substractionValue = false;
        }
    },
    

    
    
    
    
    
    // This function control memory arrays, save input to them and clean them if necessary
    memoryEngine: function() {
        
        
        if (this.memoryArray4.length === 0) {
            for (var i = 0; i < this.memoryArray1.length; i++) {
                this.memoryArray4.push(this.memoryArray1[i]);
            }
        }


        

        
        this.screenArray = [0];
        this.memoryArray1 = [];
        
        
        
        
        this.decisionEngine();
        

        
        if (this.memoryArray4.length !== 0 && this.memoryArray2.length !== 0) {
        
        this.memoryArray4 = [];
        this.memoryArray4 = this.memoryArray9;
        this.memoryArray2 = [];
        this.memoryNumber1 = 0;
        this.memoryNumber2 = 0;
        
        
        
        
        }
        
        if (this.memoryArray2.length === 0 && this.memoryArray4 === this.memoryArray6 && this.switchNumber !== 7 && this.equalityNumber !== 1) {
            this.memoryArray3 = this.memoryArray4;
        }
        
        
        
        
    },
                                
    decisionEngine: function() {

        
        if (this.switchNumber === 1) {
            //this.squareRootEngine();


        } else if (this.switchNumber === 2) {
            //this.minusEngine();
            return;
        } else if (this.switchNumber === 3) {
            this.divisionEngine();
        
        } else if (this.switchNumber === 4) {
            this.multiplicationEngine();
        
        } else if (this.switchNumber === 5) {
            this.additionEngine();
        
        } else if (this.switchNumber === 6) {
            this.substractionEngine();
        
        } 
        
    },
    

    
    
    
///////////////////////////////////////////////////////////////////////////////////////////////////////
//                     //   CALCULATION ENGINE   //
///////////////////////////////////////////////////////////////////////////////////////////////////////    
    
    squareRootEngine: function() {

       return;
    },
    
    
    
    divisionEngine: function() {
        
        if (this.memoryArray4.length !== 0 && this.memoryArray2.length !== 0) {
            
            
            this.memoryNumber1 = parseFloat(this.memoryArray4.join(''));
            this.memoryNumber2 = parseFloat(this.memoryArray2.join(''));
            if (this.memoryNumber2 !== 0) {
            this.memoryNumber3 = this.memoryNumber1 / this.memoryNumber2;
            this.memoryArray3 = this.memoryArray2;
            this.memoryString1 = this.memoryNumber3.toString();
            this.memoryArray9 = this.memoryString1.split('');
            if (this.memoryNumber3 <= 999999999 && this.memoryNumber3 >= -999999999) {
            document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
            } else if (this.memoryNumber3 > 999999999 || this.memoryNumber3 < -999999999) {
                document.getElementById('display').textContent = 999999999;
                this.memoryReset();
            }
            } else if (this.memoryNumber2 === 0) {
                document.getElementById('display').textContent = 'ZeroDivError';
                this.memoryReset();
            }
        
        } else if (this.memoryArray2.length === 0 && this.memoryArray3.length !== 0 && this.memoryArray4.length !== 0 && this.equalityNumber === 1) {   
            if (this.memoryArray2.length === 0) {
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;
            }
            
            this.memoryNumber1 = parseFloat(this.memoryArray4.join(''));
            this.memoryNumber2 = parseFloat(this.memoryArray3.join(''));
            if (this.memoryNumber2 !== 0) {
            this.memoryNumber3 = this.memoryNumber1 / this.memoryNumber2;
            this.memoryString1 = this.memoryNumber3.toString();
            this.memoryArray9 = this.memoryString1.split('');
            if (this.memoryNumber3 <= 999999999 && this.memoryNumber3 >= -999999999) {
            document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
            } else if (this.memoryNumber3 > 999999999 || this.memoryNumber3 < -999999999) {
                document.getElementById('display').textContent = 999999999;
                this.memoryReset();
            }
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;
            } else if (this.memoryNumber2 === 0) {
                document.getElementById('display').textContent = 'ZeroDivError';
                this.memoryReset();
            }
        }
        
        else if (this.memoryArray2.length === 0 && this.equalityNumber !== 1) {
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;

            }
        
    },

    
    
    multiplicationEngine: function() {
        
        if (this.memoryArray4.length !== 0 && this.memoryArray2.length !== 0) {
            

            
            this.memoryNumber1 = parseFloat(this.memoryArray4.join(''));
            this.memoryNumber2 = parseFloat(this.memoryArray2.join(''));
            this.memoryNumber3 = this.memoryNumber1 * this.memoryNumber2;
            this.memoryArray3 = this.memoryArray2;
            this.memoryString1 = this.memoryNumber3.toString();
            this.memoryArray9 = this.memoryString1.split('');
            if (this.memoryNumber3 <= 999999999 && this.memoryNumber3 >= -999999999) {
            document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
            } else if (this.memoryNumber3 > 999999999 || this.memoryNumber3 < -999999999) {
                document.getElementById('display').textContent = 999999999;
                this.memoryReset();
            }
        
        } else if (this.memoryArray2.length === 0 && this.memoryArray3.length !== 0 && this.memoryArray4.length !== 0 && this.equalityNumber === 1) {   
            if (this.memoryArray2.length === 0) {
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;
            }
            
            
            this.memoryNumber1 = parseFloat(this.memoryArray4.join(''));
            this.memoryNumber2 = parseFloat(this.memoryArray3.join(''));
            this.memoryNumber3 = this.memoryNumber1 * this.memoryNumber2;
            this.memoryString1 = this.memoryNumber3.toString();
            this.memoryArray9 = this.memoryString1.split('');
            if (this.memoryNumber3 <= 999999999 && this.memoryNumber3 >= -999999999) {
            document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
            } else if (this.memoryNumber3 > 999999999 || this.memoryNumber3 < -999999999) {
                document.getElementById('display').textContent = 999999999;
                this.memoryReset();
            }
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;
        }
        
        else if (this.memoryArray2.length === 0 && this.equalityNumber !== 1) {
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;

            }
        
    },


 
    additionEngine: function() {

        if (this.memoryArray4.length !== 0 && this.memoryArray2.length !== 0 && this.equalityNumber !== 1) {

            
            this.memoryNumber1 = parseFloat(this.memoryArray4.join(''));
            this.memoryNumber2 = parseFloat(this.memoryArray2.join(''));
            this.memoryNumber3 = this.memoryNumber1 + this.memoryNumber2;
            this.memoryArray3 = this.memoryArray2;
            this.memoryString1 = this.memoryNumber3.toString();
            this.memoryArray9 = this.memoryString1.split('');
            if (this.memoryNumber3 <= 999999999 && this.memoryNumber3 >= -999999999) {
            document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
            } else if (this.memoryNumber3 > 999999999 || this.memoryNumber3 < -999999999) {
                document.getElementById('display').textContent = 999999999;
                this.memoryReset();
            }
        
        } else if (this.memoryArray2.length === 0 && this.memoryArray3.length !== 0 && this.memoryArray4.length !== 0 && this.equalityNumber === 1) {   if (this.memoryArray2.length === 0) {
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;

            }
            
            
            this.memoryNumber1 = parseFloat(this.memoryArray4.join(''));
            this.memoryNumber2 = parseFloat(this.memoryArray3.join(''));
            this.memoryNumber3 = this.memoryNumber1 + this.memoryNumber2;
            this.memoryString1 = this.memoryNumber3.toString();
            this.memoryArray9 = this.memoryString1.split('');
            if (this.memoryNumber3 <= 999999999 && this.memoryNumber3 >= -999999999) {
            document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
            } else if (this.memoryNumber3 > 999999999 || this.memoryNumber3 < -999999999) {
                document.getElementById('display').textContent = 999999999;
                this.memoryReset();
            }
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;
        } 
        
        else if (this.memoryArray2.length === 0 && this.equalityNumber !== 1) {
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;

            }

    },
   
    
    
    substractionEngine: function() {
        
        if (this.memoryArray4.length !== 0 && this.memoryArray2.length !== 0) {
            

            this.memoryNumber1 = parseFloat(this.memoryArray4.join(''));
            this.memoryNumber2 = parseFloat(this.memoryArray2.join(''));
            this.memoryNumber3 = this.memoryNumber1 - this.memoryNumber2;
            this.memoryArray3 = this.memoryArray2;
            this.memoryString1 = this.memoryNumber3.toString();
            this.memoryArray9 = this.memoryString1.split('');
            if (this.memoryNumber3 <= 999999999 && this.memoryNumber3 >= -999999999) {
            document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
            } else if (this.memoryNumber3 > 999999999 || this.memoryNumber3 < -999999999) {
                document.getElementById('display').textContent = 999999999;
                this.memoryReset();
            }
        } else if (this.memoryArray2.length === 0 && this.memoryArray3.length !== 0 && this.memoryArray4.length !== 0 && this.equalityNumber === 1) {   if (this.memoryArray2.length === 0) {
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;

            }
            
            
            this.memoryNumber1 = parseFloat(this.memoryArray4.join(''));
            this.memoryNumber2 = parseFloat(this.memoryArray3.join(''));
            this.memoryNumber3 = this.memoryNumber1 - this.memoryNumber2;
            this.memoryString1 = this.memoryNumber3.toString();
            this.memoryArray9 = this.memoryString1.split('');
            if (this.memoryNumber3 <= 999999999 && this.memoryNumber3 >= -999999999) {
            document.getElementById('display').textContent = this.memoryArray9.slice(0, 9).join('');
            } else if (this.memoryNumber3 > 999999999 || this.memoryNumber3 < -999999999) {
                document.getElementById('display').textContent = 999999999;
                this.memoryReset();
            }
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;
        }
        
        else if (this.memoryArray2.length === 0 && this.equalityNumber !== 1) {
            this.memoryArray4 = this.memoryArray9;
            this.memoryArray6 = this.memoryArray4;

            }
        
    },

    
    
    equalityEngine: function() {

       this.decisionEngine(); 
        
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
                                                    calcMemory.squareRoot();
});

document.getElementById('minus').addEventListener('click', function() {
                                                    calcMemory.minus();
                                                    //calcMemory.switchNumber = 2;
        
});

document.getElementById('division').addEventListener('click', function() {
                                                    calcMemory.equalityNumber = 0;
                                                    calcMemory.memoryEngine();
                                                    calcMemory.switchNumber = 3;
});

document.getElementById('multiplication').addEventListener('click', function() {
                                                    calcMemory.equalityNumber = 0;
                                                    calcMemory.memoryEngine();
                                                    calcMemory.switchNumber = 4;
});

document.getElementById('addition').addEventListener('click', function() {   
                                                    calcMemory.equalityNumber = 0;
                                                    calcMemory.memoryEngine();
                                                    calcMemory.switchNumber = 5;
});

document.getElementById('substraction').addEventListener('click', function() {
                                                    calcMemory.equalityNumber = 0;
                                                    calcMemory.memoryEngine();
                                                    calcMemory.switchNumber = 6;
});

document.getElementById('equality').addEventListener('click', function() {
                                                    calcMemory.memoryEngine();
                                                    calcMemory.equalityNumber = 1;
                                                    
    
        
        
                                                    


                                                    
                                                    
        
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