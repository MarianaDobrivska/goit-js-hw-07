import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const newDiv = document.createElement("div");
  const newMarkup = `<a class="gallery__link" href=${item.original}>
              <img
                class="gallery__image"
                src=${item.preview}
                data-source=${item.original}
                alt=${item.description}
              />
            </a>`;

  newDiv.innerHTML = newMarkup;
  //   console.log(newDiv);
  galleryEl.append(newDiv);
});

galleryEl.addEventListener("click", onImageClick);

function onImageClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return "";

  const clickedImage = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${clickedImage}" width="800" height="600">
`);

  instance.show();
}

// function onBackdropClick(e) {
//   if (e.code === "Escape") {
//     galleryEl.removeEventListener("click", onBackdropClick);
//   }
// }
