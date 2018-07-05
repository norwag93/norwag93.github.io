var screenNumber = 0;

var screenArray = [];

var memoryArray1 = [];
var memoryArray2 = [];
var memoryArray3 = [];

var memoryNumber1 = 0;
var memoryNumber2 = 0;
var memoryNumber3 = 0;
var memoryNumber4 = 0;
var memoryNumber5 = 0;

 

var additionValue = false;
var minusValue = false;

document.getElementById('display').textContent = screenNumber;

document.getElementById('ce').addEventListener('click', function() {                                     
                                                screenNumber = 0;
                                                screenArray = [];

                                                memoryArray1 = [];
                                                memoryArray2 = [];
                                                memoryArray3 = [];

                                                memoryNumber1 = 0;
                                                memoryNumber2 = 0;
                                                memoryNumber3 = 0;
                                                memoryNumber4 = 0;
                                                memoryNumber5 = 0;
    
    
                                                document.getElementById('display').textContent = screenNumber;
                                                console.log(screenArray);
                                                additionValue = false;
                                                minusValue = false;                    
                                               });

document.getElementById('number1').addEventListener('click', function() {                                                                                     screenNumber = 1;
                                                        if (screenArray.length < 9){
                                                            screenArray.push(screenNumber);
                                                        }                 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);                         
                                               });

document.getElementById('number2').addEventListener('click', function() {                                                                                     screenNumber = 2;
                                                        if (screenArray.length < 9){
                                                            screenArray.push(screenNumber);
                                                        }                 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);  
                                               });

document.getElementById('number3').addEventListener('click', function() {                                                                                     screenNumber = 3;
                                                        if (screenArray.length < 9){
                                                            screenArray.push(screenNumber);
                                                        }                 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);  
                                               });

document.getElementById('number4').addEventListener('click', function() {                                                                                     screenNumber = 4;
                                                        if (screenArray.length < 9){
                                                            screenArray.push(screenNumber);
                                                        }                 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);  
                                               });

document.getElementById('number5').addEventListener('click', function() {                                                                                     screenNumber = 5;
                                                        if (screenArray.length < 9){
                                                            screenArray.push(screenNumber);
                                                        }                 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);  
                                               });

document.getElementById('number6').addEventListener('click', function() {                                                                                     screenNumber = 6;
                                                        if (screenArray.length < 9){
                                                            screenArray.push(screenNumber);
                                                        }                 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);  
                                               });

document.getElementById('number7').addEventListener('click', function() {                                                                                     screenNumber = 7;
                                                        if (screenArray.length < 9){
                                                            screenArray.push(screenNumber);
                                                        }                 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);  
                                               });

document.getElementById('number8').addEventListener('click', function() {                                                                                     screenNumber = 8;
                                                        if (screenArray.length < 9){
                                                            screenArray.push(screenNumber);
                                                        }                 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);  
                                               });

document.getElementById('number9').addEventListener('click', function() {                                                                                     screenNumber = 9;
                                                        if (screenArray.length < 9){
                                                            screenArray.push(screenNumber);
                                                        }                 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);
                                                console.log(screenNumber);
                                               });

document.getElementById('number0').addEventListener('click', function() {                                                                                     screenNumber = 0;
                                                        if (screenArray.length < 9 && screenArray[0] !== 0){
                                                            screenArray.push(screenNumber);
                                                        }                 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);  
                                               });

/*
document.getElementById('dot').addEventListener('click', function() {                                                                                     screenNumber = '.';
                                                        if (screenArray.length === 8) {
                                                            screenArray.push(screenNumber);
                                                        }
                                                        
                                                        else if (screenArray.length === 0 && screenArray.indexOf('0.') !== -1){
                                                            screenArray.push();     
                                                        }
                                                        else if (screenArray.length === 0 && screenArray.indexOf('.', '0.') === -1){
                                                            screenArray.push(0 + screenNumber);             
                                                        }
                                                        else if (screenArray.length < 9 && screenArray.length !== 0 && screenArray.indexOf('.') === -1){
                                                        screenArray.push(screenNumber);
                                                        } 
                                                document.getElementById('display').textContent = screenArray.join('');
                                                console.log(screenArray);  
                                               });
                                               
*/

document.getElementById('addition').addEventListener('click', function() {
                                                        if (screenArray.length !== 0 && additionValue !== true) {
                                                            additionValue = true;
                                                            minusValue = false;
                                                            console.log('1 dziala')
                                                            memoryArray1 = screenArray;
                                                            memoryNumber1 = parseFloat(memoryArray1.join(''));
                                                            console.log(memoryNumber1);
                                                            memoryArray1 = [];
                                                            screenArray = []; 
                                                            if (screenArray.length !== 0 && memoryNumber4 === 0){ document.getElementById('display').textContent = 0;
                                                            } else {
                                                            document.getElementById('display').textContent = memoryNumber4 + memoryNumber1
                                                            }
                                                        } else if (screenArray.length !== 0 && additionValue === true && memoryNumber3 === 0) { 
                                                                console.log('2 dziala')
                                                                memoryArray1 = screenArray;
                                                                memoryNumber2 = parseFloat(memoryArray1.join(''));
                                                                console.log(memoryNumber1);
                                                                console.log(memoryNumber2);
                                                                memoryNumber3 = memoryNumber1 + memoryNumber2;
                                                                memoryNumber4 = memoryNumber3;
                                            document.getElementById('display').textContent = memoryNumber4;
                                                                memoryArray1 = [];
                                                                memoryNumber2 = 0;
                                                                screenArray = [];
                                                                memoryNumber1 = memoryNumber3;
                                                                memoryNumber4 = memoryNumber3;
                                                                memoryNumber3 = 0;
                                                                console.log(memoryNumber4);
                                                                
                                                            }
                                                        
                                               });

document.getElementById('minus').addEventListener('click', function() {
                                                        if (screenArray.length !== 0 && minusValue !== true) {
                                                            minusValue = true;
                                                            additionValue = false;
                                                            console.log('1 dziala')
                                                            memoryArray1 = screenArray;
                                                            memoryNumber1 = parseFloat(memoryArray1.join(''));
                                                            console.log(memoryNumber1);
                                                            memoryArray1 = [];
                                                            screenArray = [];
                                                            if (screenArray.length !== 0 && memoryNumber4 === 0){ document.getElementById('display').textContent = 0;
                                                            } else {
                                                            document.getElementById('display').textContent = memoryNumber4 - memoryNumber1
                                                            }
                                                        } else if (screenArray.length !== 0 && minusValue === true && memoryNumber3 === 0) { 
                                                                console.log('2 dziala')
                                                                memoryArray1 = screenArray;
                                                                memoryNumber2 = parseFloat(memoryArray1.join(''));
                                                                console.log(memoryNumber1);
                                                                console.log(memoryNumber2);
                                                                memoryNumber3 = memoryNumber1 - memoryNumber2;
                                                                memoryNumber4 = memoryNumber3;
                                            document.getElementById('display').textContent = memoryNumber4;
                                                                memoryArray1 = [];
                                                                memoryNumber2 = 0;
                                                                screenArray = [];
                                                                memoryNumber1 = memoryNumber3;
                                                                memoryNumber4 = memoryNumber3;
                                                                memoryNumber3 = 0;
                                                                console.log(memoryNumber4);
                                                                
                                                                
                                                            }
                                                        
                                               });
