// let hi = 'xin chao cac ban';
// let arrhi = hi.split('');
// // console.log(arrhi);
// // b = arrhi.reduce(function (accumulate,currentValue) {
// //     if (currentValue in accumulate) {
// //        accumulate[currentValue] ++;
// //     } else {
// //         accumulate[currentValue] = 1
// //     };
// //     return accumulate;
// //     }, {});
let arr = [];
let max = 0;
arr.push("1", "3", "5");
arr.unshift("2");
console.log(arr);

max = arr[0];

for (let index = 0; index < arr.length; index++) {  
    if (arr[index]>max) {
        max = arr[index];
    }; 
}

console.log('Số lớn nhất là:', max);

min = arr[0];

for (let index = 0; index < arr.length; index++) {  
    if (arr[index]<min) {
        min = arr[index];
    }; 
}

console.log('Số nhỏ nhất là:', min);

max = arr.reduce(function(accumulate, object) {
    if (accumulate > object) {
        return accumulate;
    } else {
        return object;
    }
} )

console.log('Số lớn nhất là:', max);

min = arr.reduce(function(accumulate, object) {
    if (accumulate < object) {
        return accumulate;
    } else {
        return object;
    }
} )

console.log('Số nhỏ nhất là:', min);

tong = arr.reduce(function(accumulate, object){
    return +accumulate + +object;
})

console.log('Tong la:', tong);