// Bài 4: Viết hàm tinhToan(soThuNhat, soThuHai, phepTinh)
// trả về giá trị của phép tính.
// Sử dụng prompt để nhập dữ liệu từ người dung.
// +, -, *, /, **
// let soMot = prompt("Nhập số thứ nhất");
// let soHai = prompt("Nhập số thứ hai");
// let phep = prompt("Nhập phép tính");

// function tinhToan(soThuNhat, soThuHai, phepTinh) {
//   switch (phepTinh) {
//     case "+":
//       console.log('Kết quả của phép ' + phepTinh + ' là: ', +soThuNhat + +soThuHai);
//       break;
//     case "-":
//       console.log(`Kết quả của phép ${phepTinh} là: `, soThuNhat - +soThuHai);
//       break;
//     case "*":
//       console.log(`Kết quả của phép ${phepTinh} là: `, soThuNhat * +soThuHai);
//       break;
//     case "/":
//       if (+soThuHai === 0) {
//         alert("Không thể thực hiện phép chia cho số 0!");
//         return false;
//       }
//       console.log(`Kết quả của phép ${phepTinh} là: `, +soThuNhat / +soThuHai);
//       break;
//     case "^":
//       console.log(
//         `Kết quả của phép ${phepTinh} là: `,
//         (+soThuNhat) ** +soThuHai
//       );
//       break;
//   }
// }

// tinhToan(soMot, soHai, phep);


// Bài 5: Viết 1 hàm kiểm tra số vừa nhập có phải là số nguyên tố hay ko?

// let num = prompt('Nhập số cần kiểm tra');
// let flag = true;
// function check(numberEnter) {

//     if (numberEnter < 2) {
//        flag = false;
//     }

//     for (let index = 2; index < numberEnter; index++) {
//         if (numberEnter%index == 0) {
//             console.log('Chạy vào đây đâu');
//             flag = false;
//             break;
//         }
//     }

//     if (flag) {
//         console.log(`Số ${numberEnter} là số nguyên tố`);
//     } else {
//         console.log(`Số ${numberEnter} không là số nguyên tố`);
//     }
// }

// check(num);