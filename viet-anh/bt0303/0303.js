// bai 2:
do {
    var userNumber = parseInt(prompt('Bài 2 - Vui long nhap: '));    
}
while (userNumber <= parseInt(100));

// bai 3:
let a = parseInt(prompt('Bài 3 - nhap so a: '));
let b = parseInt(prompt('và nhap so b: '));

function min (a,b)
{    
    a<b? document.write(' so b lon hon. '): document.write('so a lon hon. ');
}
min();

// bai 4:
let phepToan = (prompt('Bai 4 - nhap phep toan: '))
let kq;
function tinhToan(a,b, phepToan){    
    if (phepToan == '+'){
        kq = a + b;        
    }
    else if(phepToan == '-'){
        kq = a - b; 
    } 
    return kq;
}

document.write( 'Ket qua: ' + tinhToan(a,b,phepToan)+ '. ');

// bai 5:
let n = parseInt(prompt('nhap so: '));
function soNguyenTo(n){
    if (n <=1 ) return false;
    else if (n == 2 || n == 3 || n== 5)
    return true;
    else if (n %2 == 0) return false;
    else {
        let max = Math.sqrt(n);
        for (let i=3; i<=max; i+=2)
        {
            if (n%i == 0 ) return false;
        }
        return true;
    }
}

document.write('So vua nhap la so nguyen to? '+ soNguyenTo(n));
