//let user = 'honganh';

//console.log(typeof user);

//hàm promt: đưa ra ô input để nhập dữ liệu
// let userName = prompt('Hello');
// console.log(userName);

// //hàm confirm: cho user xác nhận hoặc không
// //lấy giá trị của hàm confirm:
// let bool = confirm('True or False?');
// console.log(bool); //true or false
// console.log(typeof bool);//kiểu boolean

// //dấu '+' là phép tính giữa số với số, nối chuỗi, ép kiểu
// //ép kiểu: +'3' là 1 số

//sự khác nhau của == và ===
//1 == '1' => true
//js tự động convert sang kiểu string
//== so sánh giá trị
//1 == '1' => true 
//=== so sánh cả giá trị và kiểu
//so sánh kiểu trước
//1 === '1' => false

// ||: trả về giá trị đúng đầu tiên
// ??: trả về giá trị mặc định đầu tiên
//ví dụ:

//let a = 0;
// a || 10 -> 10
// a ?? 10 -> 0

//let a = 1;
// a || 10 -> 1
// a ?? 10 -> 1

//let a;
// a ?? 10 -> 10

let a = 1;
// let b = a++ + ++a;
console.log(a);
// console.log(b);
console.log(a++ + ++a); //4

//khi nao dung for/while
//chắc chắn biết điều kiện dừng: for
//chưa biết rõ điều kiện dừng: while

//ví dụ: in các số từ 1-10: for
//while: kiểu cứ đi rồi sẽ đến nhưng không biết bao giờ sẽ đến


//biểu thức hàm: không tường minh = khai báo hàm, khi biên dịch: khi nào gọi đến biểu thức hàm thì hàm mới được khởi tạo, còn khai báo hàm thì hàm sẽ được khởi tạo ngay khi biên dịch
// ví dụ
//khai báo hàm
// function showName(){
//     console.log('Hi');
// }
//biểu thức hàm
//let userName = showName(){
//     console.log('Hi');
//}

