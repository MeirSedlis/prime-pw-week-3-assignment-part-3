console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
let partNeeded = 40;
console.log('1. Number of partsNeeded:', partNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
let supplyChanges = [3, 5, -6, 0, 7, 11 ];

console.log('2. Array of supplyChanges:');

// There was no instruction here to correct this console.log so I won't, but if this were 
// a project I would clarify the expectation instead of assuming.

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
let removedItem = supplyChanges.pop();
supplyChanges.pop();
console.log(removedItem, 'was added by mistake and has been removed');

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('6. Showing supplyChanges...');
for(let i=0; i<supplyChanges.length; i++){
    if(i > 0){
        console.log( 'Added', i, 'parts')
    }  //code if positive
    else if (i === 0){
        console.log( 'No change.' )
    }//code if 0
    else {
        console.log( 'Removed', Math.abs(i), 'parts' )
    }
    //removal code. The double negative was irking me so that Math.abs seemed like an elegants solution!
}

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');
for(let value of supplyChanges){
    if(value > 0){
        console.log( 'Added', value, 'parts')
    }  //code if positive
    else if (value === 0){
        console.log( 'No change.' )
    }//code if 0
    else {
        console.log( 'Removed', Math.abs(value), 'parts' )
    }
    //removal code. The double negative was irking me so that Math.abs seemed like an elegants solution!
}
// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');