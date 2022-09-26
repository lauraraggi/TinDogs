import { dogs } from "/data.js";
import Dog from "/Dog.js";

const dogCard = document.querySelector(".dog-profile");
const rejectBtn = document.querySelector(".footer__btn--reject");
const acceptBtn = document.querySelector(".footer__btn--accept");

const btnEls = document.querySelectorAll(".footer__btn");
const stampEl = document.querySelector(".stamp");

function getNextDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new Dog(nextDogData) : {};
}

function render() {
  stampEl.innerHTML = "";
  dogCard.innerHTML = dog.getDogHtml();
}

function swipe() {
  setTimeout(function () {
    dog = getNextDog();
    render();
  }, 2000);
}

function likeOrReject(e) {
  if (!dog.hasBeenSwiped) {
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked =
      e.currentTarget.getAttribute("data-action") === "like"
        ? true
        : e.currentTarget.getAttribute("data-action") === "reject"
        ? false
        : false;
    dog.setStamp(stampEl);
    if (Object.keys(dogs).length === 0) {
      setTimeout(() => {
        dogCard.innerHTML = `<h4>Sorry! No more dogs available</h4>`;
        stampEl.innerHTML = "";
        Array.from(btnEls).map((btn) => btn.setAttribute("disabled", ""));
      }, 2000);
    } else {
      swipe();
    }
  }
}

let dog = new Dog(dogs.shift());

for (let i = 0; i < btnEls.length; i++) {
  btnEls[i].addEventListener("click", likeOrReject);
}

render();
