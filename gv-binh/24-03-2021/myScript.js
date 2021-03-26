
// Khởi tạo Object
//----
// let obj = {}
// let obje = new Object({
//     value: 3,
//     showname: () => {}
// })
// console.log(obje)
// obj.prototype.count = () => {
//     console.log('tôi đém')
// }
// console.log(obj)
//----


// Hàm Contructor
//----
// function sinh vien
// function SinhVien(code = '2345') {
//     this.maSinhVien = code
//     this.fullName = 'Ngoc Mong' 
// }

// SinhVien.prototype.createCode = () => {
//     console.log('Mã Sinh viên')
// }

// let CaoDang = new SinhVien();
// let DaiHoc = new SinhVien();
// let SauDaiHoc = new SinhVien();

// CaoDang.prototype.setCount = () => {
//     console.log('hello')
// }

// console.log('CD', CaoDang)
// console.log('DH', DaiHoc)
// console.log('SDH', SauDaiHoc)


//CAODANg thì mã sinh viên thêm CD
//DH thì mã sv thêm DH
//SDH thì mã sinh thêm chũ S

//----


//Tạo ra lớp OTO bằng hàm contructor
// tạo ra 1 đối tượng là Oto con
//tạo ra 1 dối tượng là oto tải

// ví dụ
//Contructor oto
// function OTO() {}
// let OTOCON = new OTO();
// function OTOBE() {}
// OTOBE.prototype.createBanh = () => {
//     console.log('xin chào')
// }
// const Sedan = new OTOBE()
// console.log(Sedan)


// Ví dụ về Class trong javasript
class SinhVien {
    constructor() {
        this.maSinhVien = 'abc'
        this.fullName = 'Ngoc Mong' 
    }

    _createCode = () => {
        console.log('Mã Sinh viên')
    }
}

class DaiHoc extends SinhVien {
    lastName = 'Ngoc'
    constructor(maSinhVien, fullName) {
        super(maSinhVien, fullName)
        // this._lastName = 'Ngoc'
    }

    showName = () => {
        console.log(this.maSinhVien)
        console.log(this.fullName)
        console.log(this._lastName)
    }  
}

const test =  new DaiHoc('', '')
test._lastName = 'Mong'
test.showName()
// test.createCode()