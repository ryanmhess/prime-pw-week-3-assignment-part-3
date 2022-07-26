console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('\n1. Number of partsNeeded:');

let partsNeeded = 40;
console.log('Parts Needed:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('\n2. Array of supplyChanges:');

let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log('The supply change includes:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('\n3. Second supplyChange is:');

console.log('The second item in the supply change is:', supplyChanges[1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('\n4. Removed item:');

console.log('The last item of the supply change was added by mistake.');
let mistakeInventory = supplyChanges.pop();
console.log(mistakeInventory, 'has been successfully removed from the supply change.');

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('\n5. Adding 25 to supplyChanges.');

console.log('A new delivery of 25 items has added.');
supplyChanges.push(25);
console.log('Updated supply changes:', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 
console.log('\n6. Showing supplyChanges...');

for(i=0; i<supplyChanges.length; i++){
    if(supplyChanges[i] > 0){
        console.log('Added', supplyChanges[i], 'parts.');
    }   
    else if(supplyChanges[i] === 0){
        console.log('No changes.');
    }   
    else if(supplyChanges[i] < 0){
        console.log('Removed', -supplyChanges[i], 'parts.');
    }
}

// STRETCH GOALS
console.log('\n---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('\n7. Showing supplyChanges with "for of" loop');

for(transactions of supplyChanges){
    if(transactions > 0){
        console.log('Added', transactions, 'parts.');
    }   
    else if(transactions === 0){
        console.log('No changes.');
    }   
    else if(transactions < 0){
        console.log('Removed', -transactions, 'parts.');
    }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('\n8. Total supplies available is:');

let totalParts = 0;
for(let i=0; i<supplyChanges.length; i++){
    totalParts += supplyChanges[i];
}
console.log('The total parts available after all current transactions:', totalParts);

// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('\n9. Filling boxes with a "while" loop');

let stashParts = 572;
let stashBox = 0;

while(stashParts > 7){
    stashBox ++;
    stashParts -= 7;
}

console.log('The current inventory was organized into', stashBox, 'boxes.');
console.log('There were', stashParts, 'extra parts set aside as spares.');
