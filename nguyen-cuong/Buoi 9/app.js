// let s = "xin chao cac ban";
// let arr = s.split("");
// arr = arr.filter((item) => {
//   return item != " ";
// });
// const Object = arr.reduce((obj, item) => {
//   if (!obj[item]) {
//     obj[item] = 0;
//   }
//   obj[item]++;
//   return obj;
// }, {});
// console.log(Object);
const arr = [
  {
    firstName: "A",
    lastName: "B",
  },
  {
    firstName: "A",
    lastName: "B",
  },
  {
    firstName: "C",
    lastName: "A",
  },
  {
    firstName: "A",
    lastName: "D",
  },
  {
    firstName: "B",
    lastName: "C",
  },
];
const re = {
  firstName: "E",
  lastName: "F",
  fullName: "E-F",
};
let sum = 0;
let result = [];
arr.forEach((item) => {
  if (item.lastName == "B") {
    result.push(item);
    sum++;
  }
  if (item.firstName == "C") {
    item.fullName = `${item.firstName} ${item.lastName}`;
  }
  if (item.lastName == "D") {
    item = Object.assign(item, re);
  }
});
const b = arr.find(item);
const check = arr.filter((item) => {
  return item.lastName == "B";
});
console.log(result);
console.log(sum);
console.log(arr);
