// Bai 1: Su dung vong lap for xuat ra cac so chan tu 2 den 10
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }
// Bài 2: Viết một vòng lặp nhắc nhở nhập một số lớn hơn 100. Nếu khách nhập một số khác – hãy yêu cầu họ nhập lại. Vòng lặp phải yêu cầu một số cho đến khi khách nhập một số lớn hơn 100 hoặc hủy đầu vào / nhập vào một dòng trống.
// while (true) {
//     let input = prompt("nhap so > 100");
//     let a = parseInt(input);
//     if (a > 100) {
//         break;
//     }
// }
// Bài 3: Viết hàm min (a, b) trả về gía trị nhỏ nhất trong hai số a và b
// let numberA = prompt("Nhap so a");
// let numberB = prompt("Nhap so b");
// let a = parseInt(numberA, 10);
// let b = parseInt(numberB, 10);

// function minMax(a, b) {
//     if (a < b) {
//         return a;
//     } else {
//         return b;
//     }
// }
// alert(minMax(a, b));
// Bài 4: Viết hàm tinhToan(soThuNhar, soThuHai, phepTinh) trả về giá trị của phép tính. Sử dụng prompt để nhập dữ liệu từ người dung.

// let numberA = prompt("Nhap so a");
// let numberB = prompt("Nhap so b");
// let a = parseInt(numberA, 10);
// let b = parseInt(numberB, 10);
// let calc = prompt("Moi nhap phep tinh theo + - * /");

// function calculator(num1, num2, calculation) {
//     switch (calculation) {
//         case "+":
//             return num1 + num2;
//             break;
//         case "-":
//             return num1 - num2;
//             break;
//         case "*":
//             return num1 * num2;
//             break;
//         case "/":
//             return num1 / num2;
//             break;
//         default:
//             return "Sai cu phap phep tinh";
//     }
// }
// alert(calculator(a, b, calc));
// Bài 5: Viết 1 hàm kiểm tra số vừa nhập có phải là số nguyên tố hay ko?
function isPrime(a) {
    if (a < 2) {
        return false;
    } else if (a == 2) {
        return true;
    } else {
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                return false;
                break;
            }
            return true;
        }
    }
}
let numberA = prompt("Nhap so a");
let a = parseInt(numberA, 10);
alert(isPrime(a));