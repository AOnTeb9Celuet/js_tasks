//1_________________________________________________________________________ 

const arr = [1, 5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}]

let copyArr = [];

for(let i = 0; i < arr.length; i++) {
    copyArr[i] = arr[i];
}

for(let i = 0; i < copyArr.length; i++) {
    if(typeof copyArr[i] != 'number') {
        copyArr.splice(i, 1);
    }
}

alert( arr );
alert( copyArr );

//2_________________________________________________________________________


const arr2 = [1, 2, 3];

const resultArr2 = arr2.concat(arr2);

alert( arr2 );
alert( resultArr2 );

//3_________________________________________________________________________

const arr3 = [1, 2, 3];

let copyArr3 = [];

for(let i = 0; i < arr3.length; i++) {
    copyArr3[i] = arr3[i];
}

copyArr3.reverse();

const resultArr3 = arr3.concat(copyArr3);

alert( arr3 );

alert( resultArr3 );

//4_________________________________________________________________________ - не используя reduce

const arr4 = [1, -5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

let sumArr4 = 0;

for(let i = 0; i < arr4.length; i++) {
    if(typeof arr4[i] == 'number' && arr4[i] > 0) {
        sumArr4 += arr4[i];
    }
}

alert( sumArr4 );

//5_________________________________________________________________________ - остается объект в конце (хз почему)

const arr5 = [1, -5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

let copyArr5 = [];

for(let i = 0; i < arr5.length; i++) {
    copyArr5[i] = arr5[i];
}

for(let i = 0; i < copyArr5.length; i++) {
    if(typeof copyArr5[i] != 'number' || copyArr5[i] < 0) {
        copyArr5.splice(i, 1);
    }
}

alert( arr5 );
alert( copyArr5 );

//6_________________________________________________________________________

const obj = {name: 'Vasia', age: 24, sex: 'male'}

const arr6 = Object.values(obj);

arr6.reverse();

alert( arr6 )

