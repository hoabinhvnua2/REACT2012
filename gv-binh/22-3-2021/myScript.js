// Cách để khởi tạo 1 object
const user = {
    userName: 'Hoa Binh',
    age: 20,
    users: [1,2,3,4],
    obj: {},
    showname: function() {
        console.log('this', this)
    },
    0: 'Xin chào các bạn react!'
};

console.log(user.showname())


// Cách dynamic key của object
// const vn = 'ten';
// const jp = 'ho';
// const user = {
//     [vn]: 'Tran Hoa Binh',
// }


// kiểm tra sự tồn tại của key trong object
// console.log('userNameList' in obj)


// Vòng lặp for in dùng cho obj
// for (const key in obj) {
//    console.log(obj[key])
// }


// tham trị: trỏ tới giá trị của biến
// tham chiếu: là đang muốn nới tới địa chỉ ô nhớ 
let c = 6;
let d = c
// console.log(d) // 6
// d = 5
// console.log('c',c) // 6
// console.log('d', d) // 5
let a = {
    age: 20
};
// gán a cho b nhưng ko phải gán giá trị mà gán địa chỉ ô nhớ
let b = a;
// console.log('b', b) 
// b gọi vào nội tại để thay đổi giá trị
b.age = 25
// console.log('a', a)
// console.log('b', b)
// console.log(a.age === b.age)
// console.log(Object.keys(obj))
// console.log(Object.assign(a, obj))


// Ví dụ bài tập
const arr = [
    {
        firstName: 'A',
        lastName: 'B'                             
    },
    {
        firstName: 'A',
        lastName: 'B'
    },
    {
        firstName: 'C',
        lastName: 'A'
    },
    {
        firstName: 'A',
        lastName: 'D'
    },
    {
        firstName: 'C',
        lastName: 'B'
    },
];
const re = {
    firstName: 'E',
    lastName: 'F',
    fullName: 'E-F'
}
// in ra và đếm những người có lastName là B
// Lặp qua các obj và thêm fullName cho những người có firstName là C
// gán obj sau cho nhưng obj có lastName là D

// const arrLastName = arr.filter(item => item.lastName === 'B')
// console.log(arrLastName, arrLastName.length)

// const arrFullName =  arr.map(item => {
//     if(item.firstName === 'C') {
//         return {...item, fullName: item.firstName +item.lastName}
//     }
//     return item
// })
// console.log('arrFullName', arrFullName)

// const replaceArr = arr.map(item => {
//     if (item.lastName === 'D') return re
//     return item
// })
// console.log('replaceArr', replaceArr)

