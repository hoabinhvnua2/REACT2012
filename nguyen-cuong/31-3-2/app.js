const apiUrl = "https://6050aa4a5346090017670332.mockapi.io/list-product";
let showContent = "";
fetch(apiUrl)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((item) => {
      showContent += `
    <tr>
    <th>${item.id}</th>
    <td>${item.product_name}</td>
    <td>${item.quantity}</td>
    <td>${item.price}</td>
  </tr>
    `;
    });
    document.getElementById("content").innerHTML = showContent;
  });
// slide show
const slideShow = document.querySelector(".header__slideshow-slide");
const slideShowImage = document.querySelectorAll(
  ".header__slideshow-slide .header__slideshow-slide-item img"
);
console.log(slideShow);
//select button
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const slideOne = document.querySelector("#btn1");
const slideTwo = document.querySelector("#btn2");
const slideThree = document.querySelector("#btn3");
console.log(slideOne);

// counter
let counter = 0;
const size = slideShowImage[0].clientWidth;
console.log(size);
// slideShow.style.transform = 'translateX(' + (-size * counter) + 'px';
//button listener
console.log(slideShowImage[0]);
nextBtn.addEventListener("click", () => {
  counter++;
  console.log(counter);
  if (counter > 2) {
    counter = 0;
  }
  slideShow.style.transition = "transform 0.4s ease-in-out";
  slideShow.style.transform = "translateX(" + -size * counter + "px";
});
prevBtn.addEventListener("click", () => {
  counter--;
  console.log(counter);
  if (counter < 0) {
    counter += 3;
  }
  slideShow.style.transition = "transform 0.4s ease-in-out";
  slideShow.style.transform = "translateX(" + -size * counter + "px";
});
slideOne.addEventListener("click", () => {
  counter = 0;
  slideShow.style.transition = "transform 0.4s ease-in-out";
  slideShow.style.transform = "translateX(" + -size * counter + "px";
});
slideTwo.addEventListener("click", () => {
  counter = 1;
  slideShow.style.transition = "transform 0.4s ease-in-out";
  slideShow.style.transform = "translateX(" + -size * counter + "px";
});
slideThree.addEventListener("click", () => {
  counter = 2;
  slideShow.style.transition = "transform 0.4s ease-in-out";
  slideShow.style.transform = "translateX(" + -size * counter + "px";
});
