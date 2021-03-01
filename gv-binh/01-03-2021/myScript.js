// Hiển thị cho người dùng
// alert('Xin chào các bạn!');

// cách khai báo cũ
// global
var admin = 'Xin chào các bạn lớp React!';
const PI = 3.14;
// const PI = "BINH";
// cách khai báo mới

// cách đặt tên biến cần đạt ít nhất 2 tiêu trí
// có ý nghĩa và tập trung mô tả được đối tượng lưu trữ
// viết theo kiểu lạc đà tức là 1 chữ cái thì viết thường, từ 2 chũ trở lên thì viết hoa chữ cái đầu của từ thứ 2 trở đi

// let userName = 'Ngọc';
// let age = 28;
// let email = '';

// const sinhVien = 'Cường';

// var là global scope nó ko bị ảnh hưởng bới block scope nhưng sẽ bị ảnh hưởng bới function scope, var có tính chất hoisting
// var abc;


// những vấn đề cần tìm hiểu thêm:
// hoisting trong js
// block scope và function scope, cần tìm hiểu thêm về lexical scope
// var và let 
// const sinh ra để khai báo hằng số

// console.log(abc);

let abc = 'hello';
let user = 'Nam';
const PI_NUM = 'Khiem';
// console.log(abc);

var admin = 'Binh';
// block scope {...}

if(true) {
    // block scope
    var user = 'Ngoc';
    const admin = 'Khiem';
}

function showName() {
    var userName = 'Canh';

}

console.log(userName);
console.log(user);
console.log(admin);



