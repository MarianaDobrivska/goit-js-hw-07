import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");

galleryEl.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                alt="${description}"
            />
        </a>`;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// gallery.on("show.simplelightbox", function (e) {
//   e.preventDefault();
// });

// galleryItems.forEach((item) => {
//   //   const newDiv = document.createElement("li");
//   //   newDiv.classList.add("gallery__item");

//   //   const newMarkup = `<a class="gallery__item" href=${item.original}>
//   //   <img class="gallery__image" src=${item.preview} alt=${item.description} />
//   // </a>`;

//   //   newDiv.innerHTML = newMarkup;
//   //   //   console.log(newDiv);
//   //   galleryEl.append(newDiv);

// });
