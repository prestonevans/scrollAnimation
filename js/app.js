const elems = document.querySelectorAll('p');

let windowHeight = window.innerHeight;

window.addEventListener('scroll', checkPosition);
window.addEventListener('resize', setWindowHeight);

initializeElementsOutOfWindowHeight();

function setWindowHeight() {
  windowHeight = window.innerHeight;
  initializeElementsOutOfWindowHeight();
}

function checkPosition() {
  for (let i = 0; i < elems.length; i++) {
    let posFromTop = elems[i].getBoundingClientRect().top;
    if (posFromTop - windowHeight <= 0) {
      elems[i].style.transform = 'translateX(0)';
      elems[i].style.opacity = '1';
    }
  }
}

function initializeElementsOutOfWindowHeight() {
  for (let i = 0; i < elems.length; i++) {
    let posFromTop = elems[i].getBoundingClientRect().top;
    if (posFromTop - windowHeight > 0) {
      elems[i].style.transform = `${
        i % 2 === 0 ? 'translateX(-50%)' : 'translateX(50%)'
      }`;
      elems[i].style.opacity = '0';
      elems[i].style.transition = '1s ease';
    } else {
        elems[i].style.transition = '0s ease'
      elems[i].style.transform = 'translateX(0)';
      elems[i].style.opacity = '1';
    }
  }
}
