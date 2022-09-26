// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHtml() {
    return `
        <div class="overlay"></div>
        <img src="${this.avatar}" alt="" class="dog-profile__image" />

        <div class="info">
          <h1 class="title">${this.name}, ${this.age}</h1>
          <p class="description">${this.bio}</p>
        </div>`;
  }

  setStamp(el) {
    let stamp = this.hasBeenLiked ? "like-stamp.png" : "nope-stamp.png";
    el.innerHTML = `<img src="images/${stamp}" alt="" />`;
  }
}

export default Dog;
