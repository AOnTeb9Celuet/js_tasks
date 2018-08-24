//1_________________________________________________________________________ 

const arr = [1, 5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}]

const copyArr = arr.filter(item => typeof item === 'number');

console.log(copyArr);


//2_________________________________________________________________________


const arr2 = [1, 2, 3];

const resultArr2 = arr2.concat(arr2);

console.log( resultArr2 );

//3_________________________________________________________________________

const arr3 = [1, 2, 3];

let copyArr3 = [];

for(let i = 0; i < arr3.length; i++) {
    copyArr3[i] = arr3[i];
}

copyArr3.reverse();

const resultArr3 = arr3.concat(copyArr3);

console.log( resultArr3 );

//4_________________________________________________________________________

const arr4 = [1, -5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

let sumArr4 = 0;

for(let i = 0; i < arr4.length; i++) {
    if(typeof arr4[i] == 'number' && arr4[i] > 0) {
        sumArr4 += arr4[i];
    }
}

console.log( sumArr4 );

//5_________________________________________________________________________ - остается объект в конце (хз почему)

const arr5 = [1, -5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

const copyArr5 = arr5.filter(item => typeof item === 'number' && item > 0)

console.log( copyArr5 );

//6_________________________________________________________________________

const obj = {name: 'Vasia', age: 24, sex: 'male'}

const arr6 = Object.values(obj);

arr6.reverse();

console.log( arr6 );


/*
const arr7 = [1, -5, 1, 3, '4', [3], 'text', 8, '33', 65, -7, {5:3}];

const copyArr7 = arr7.map(item => item);

console.log( copyArr7 );
*/