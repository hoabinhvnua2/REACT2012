let user = "React";

// alert('Xin chào các bạn lớp React!');
// ko sử dụng 'name' để đặt tên biến
// dấu '+' khá đặc biệt: là phép tính giữa số vs số, phếp nối giữa chuỗi vs chuỗi, và nó còn dùng để ép kiểu

// let num =  prompt('Nhập sô thứ nhất');
// console.log(num);
// console.log(typeof num);

// let bool = confirm('Đúng hay sai?');
// console.log(bool);
// console.log(typeof bool);

// let a = 1; // a = 1
// alert(a++); // nó in ra biến a (nó đang có giá trị là 1), rồi nó công biến a thêm 1 => a = 2
// alert(++a); // a = 2 + 1 = 3 nó mới in ra màn hình
// alert(a--);
// alert(--a);
// ++a và a++;
// == khác với  === ở chỗ nào?
// let b = '1';

//a != b => true
//a !== b => false

// đối với 1 điều kiện
// if(a === b) {
//     //điều gì đó mới đc thực hiện
//     console.log('có bằng nhau');
// }

// rút gọn
// if(a===b) console.log('có bằng nhau');

//đối với 2 điều kiện
// if (1) {
//     console.log('có bằng nhau');
// } else {
//     console.log('không bằng nhau');
// }

// rút gọn
// false ? console.log('có bằng nhau') : console.log('không bằng nhau');

// đối với rất nhiều điều kiện
// if (a == 2) {

// } else if(a == 3) {

// } else if(a == 4) {

// } else {

// }

// switch case
// switch (a) {
//     case 2:
//         // làm cái gì đó rồi
//         console.log('tôi là số 2');
//         break;
//     case 3:

//         break;
//     case 4:

//         break;
//     case 5:

//         break;
//     case 6:

//         break;
//     case 7:

//         break;

//     default:
//         console.log('mặc định')
//         break;
// }

// let a = 1;
// (a++) + (++a); 3
// 1 + 2 = 4
// console.log((a++) + (++a));
// 1 + 2 = 3
// a++;
// console.log(a);

let b = 2;
let c = 2;

// if (a || b) {
//     console.log('kết quả của phép công là: ', 1 + 2);
// }

// alert(c || 1); // 1
// alert(c ?? 1); // 0

// bài toán in ra tất cả các số từ 0 -> 5
// for
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// while là kiểm tra điều kiện trước khi làm gì đó
let a = 6;
// while(a < 5) {
//     console.log('tôi là while', a);
//     a++; //
// }

//do while là làm cái gì đó đã rồi mới bắt đầu so sánh điều kiện
//  do {
//      console.log('tôi là do while ', a);
//      a++;
//  } while (a < 5);

// cú pháp dùng để khai báo hàm
// mỗi hàm chỉ thực hiện 1 việc duy nhất
// tham số truyền vào hàm

let userName = prompt("Nhập tên của bạn: ");

//hàm ko có giá trị trả về
function xinChao(thamSo1) {
  console.log("Xin chào bạn: ", thamSo1);
}

// gọi hàm
// xinChao(userName);

// hàm có giá trị trả về
function xinChao(thamSo1) {
  let a = 4;
  //làm điều gì đó
  return a;
}

// Biểu thức hàm
// let showName = function () {
//   console.log("Hi bạn");
// };


//Bài tập Sử dụng vòng lặp for để xuất ra các số chẵn từ 2 đến 10.
// input và output
// input: 2 và 10 và sử dụng vòng lặp for
// output: hiển thị các số chẵn trong khoảng từ 2 - 10

for(let i = 2; i <= 10; i++) {
    // console.log(i);
    if(i%2 == 0) {
        console.log(i);
    }
}