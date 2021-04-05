let btnSum = document.querySelector("#btnSum");
let btnSub = document.querySelector("#btnSub");
let btnMul = document.querySelector("#btnMul");
let btnDiv = document.querySelector("#btnDiv");
let btnPow = document.querySelector("#btnPow");
let btns = document.querySelectorAll("button");
let res = document.querySelector("#res");
let result;
const add = () => {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  result = Number(num1) + Number(num2);
  res.innerHTML = result;
};
const sub = () => {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  result = Number(num1) - Number(num2);
  res.innerHTML = result;
};
const mul = () => {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  result = Number(num1) * Number(num2);
  res.innerHTML = result;
};
const div = () => {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  result = Number(num1) / Number(num2);
  res.innerHTML = result;
};
const pow = () => {
  let num1 = document.querySelector("#num1").value;
  let num2 = document.querySelector("#num2").value;
  result = Number(num1) ** Number(num2);
  res.innerHTML = result;
};
console.log(btns);
const handleClick = (e) => {
  // e.preventDefault(); // ngan chan hanh dong mac dinh cua trinh duyet
  btns.forEach((item) => {
    item.classList.remove("is-focus");
  });
  a;
  e.currentTarget.classList.add("is-focus");
};

btns.forEach((node) => {
  node.addEventListener("click", handleClick);
});
btnSum.addEventListener("click", add);
btnSub.addEventListener("click", sub);
btnMul.addEventListener("click", mul);
btnDiv.addEventListener("click", div);
btnPow.addEventListener("click", pow);
