import room from './images/mainroom.jpg';
import levatory from './images/levatory.jpg';
import hallway from './images/hallway.jpg';
import kitchen from './images/kitchen.jpg';

const galleryImage = document.querySelector('.gallery__image');
const galleryMenu = document.querySelector('.menu__list');

function changeImage(name) {
  switch (name) {
    case 'kitchen':
      galleryImage.src = `${kitchen}`;
      break;
    case 'room':
      galleryImage.src = `${room}`;
      break;
    case 'levatory':
      galleryImage.src = `${levatory}`;
      break;
    case 'hallway':
      galleryImage.src = `${hallway}`;
      break;
    default:
      galleryImage.src = `${kitchen}`;
  }
}

galleryMenu.addEventListener('click', (event) => {
  const name = event.target.getAttribute('name');
  changeImage(name);
});
