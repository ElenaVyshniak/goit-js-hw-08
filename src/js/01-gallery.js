import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryList = document.querySelector('.gallery');
const listMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
      src="${preview}"
      alt="${description}" />
   </a>
</li>
    `
  )
  .join('');

console.log(listMarkup);

galleryList.innerHTML = listMarkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
