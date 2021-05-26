const galleryImage = document.querySelector('.gallery__image');
const galleryMenu = document.querySelector('.menu__list');

function changeImage(name) {
  switch (name) {
    case 'room':
      galleryImage.style.backgroundImage = "url('./images/room.jpg')";
      break;
    case 'levatory':
      galleryImage.style.backgroundImage = "url('./images/levatory.jpg')";
      break;
    case 'hallway':
      galleryImage.style.backgroundImage = "url('./images/hallway.jpg')";
      break;
    default:
      galleryImage.style.backgroundImage = "url('./images/kitchen.jpg')";
  }
}

galleryMenu.addEventListener('click', (event) => {
  const name = event.target.getAttribute('name');
  changeImage(name);
});
