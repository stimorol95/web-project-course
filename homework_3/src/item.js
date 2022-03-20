export function drawPicture(item) {
  const wrapper = document.querySelector(".gallery__content");

  if (item.type === "image") {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `
      <div class="item__box"> 
        <img src=${item.url} class="item__img">
        <p class="item__text">${item.label}</p>
      </div>
      `
    );
  }

  if (item.type === "audio") {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `
      <div class="item__box"> 
        <div class="item__audio-box">
          <audio
          controls
          class="item__audio"
          src=${item.url}>
              Your browser does not support the
              <code>audio</code> element.
          </audio>
        </div>
        <p class="item__text">${item.label}</p>
      </div>
    `
    );
  }
  if (item.type === "video") {
    wrapper.insertAdjacentHTML(
      "beforeend",
      `
      <div class="item__box"> 
        <video controls>
        <source src=${item.url}>
      </video>
        <p class="item__text">${item.label}</p>
      </div>
    `
    );
  }
}
