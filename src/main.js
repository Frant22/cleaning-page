/* eslint-disable no-inner-declarations */
const animItems = document.querySelectorAll('.animation');

function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

if (animItems.length > 0) {
  function animOnScroll() {
    for (let i = 0; i <= animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 1.5;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((pageYOffset > animItemOffset - animItemPoint)
        && (pageYOffset < animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else if (!animItem.classList.contains('no-hide')) {
        animItem.classList.remove('active');
      }
    }
  }
  window.addEventListener('scroll', animOnScroll);
  animOnScroll();
}
