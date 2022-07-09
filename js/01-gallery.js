import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup();
let instance;

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
galleryRef.addEventListener('click', onImageClick);

window.addEventListener('keydown', onKeydownClose)

function createGalleryMarkup() {
    return galleryItems.map(({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href=${original}>
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"/>
        </a>
        </div>`).join("");
}

function onImageClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }

    createInstance(e);
}

function onKeydownClose(e) {
    if (!basicLightbox.visible()) {
        return;
    }

    if (e.code === "Escape") {
        instance.close();
        return;
    }

}

function createInstance(e) {
    instance = basicLightbox.create(`
     <img src="${e.target.dataset.source}">
     `);

    instance.show();
}