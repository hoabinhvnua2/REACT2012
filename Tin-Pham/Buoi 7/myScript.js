let a = 0;
for (let i = 1; i <=10 ; i++) {
    if (i%2==0) console.log(i);
}

Num = prompt("nhap 1 so lon hon 100:");
while (Num <= 100) {
    Num = prompt ("Vui long nhap lai so lon hon 100:");
}

a = prompt ("Nhap so a");
b = prompt ("Nhap so b");
function soSanh(so1, so2) {
    if (so1>so2) {
        console.log ("so nho hon la:", so2);
    }
    else if (so1==so2) {
        console.log ("Hai so bang nhau");
        
    }
    else {
        console.log ("So nho hon la", so1)
    }
}

soSanh(a,b);