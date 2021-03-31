//bai2
let i = prompt("Nhập vào 1 số lớn hơn 100");
while (i <= 100) {
    i = prompt("Nhập vào 1 số lớn hơn 100");
}

//bai3
function min(a, b) {
    return (a < b) ? a : b;  
}
console.log(min(19, 5));

//bài 4
let soThuNhat = prompt("Nhập số thứ nhất: ");
let soThuHai = prompt("Nhập số thứ hai: ");
let phepTinh = prompt("Nhập phép tính: ");
function tinhToan(soThuNhat, soThuHai, phepTinh) {
    let res = 0;
    switch (phepTinh) {
        case '+':
            res = (+soThuNhat) + (+soThuHai);
            console.log(typeof res);
            break;
        case '-':
            res = (+soThuNhat) - (+soThuHai);
            break;
        case '*':
            res = (+soThuNhat) * (+soThuHai);
            break;
        case '/':
            //chưa kiểm tra điều kiện số thứ 2 = 0.
            res = (+soThuNhat) / (+soThuHai);
            break;
        case '%':
            //chưa kiểm tra điều kiện số thứ 2 = 0.
            res = (+soThuNhat) % (+soThuHai);
            break;
        default:
            res = (+soThuNhat) ** (+soThuHai);
            break;
    }
    console.log("Kết quả phép tính " + phepTinh + " của " + soThuNhat + " và " + soThuHai + " là:" + res);
}
tinhToan(soThuNhat, soThuHai, phepTinh);

//bai5: kiểm tra số nguyên tố
let number = prompt("Kiểm tra nguyên tố");
function isPrime(number){
    if (number < 2) return false;
    if (number == 2) return true;
    for (let i = 2; i <= Math.sqrt(number); ++i){
        if (number % i == 0)
            return false;
    }
    return true;
}
console.log(isPrime(number));