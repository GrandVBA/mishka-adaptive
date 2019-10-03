  var navHeader = document.querySelector('.main-header__nav');
  var navToggle = document.querySelector('.main-header__toggle');
  var link = document.querySelector('.product-week__button');
  var popup = document.querySelector('.modal');
  var overlay = document.querySelector('.modal-overlay');
  var close = document.querySelector('.modal-close');

  link.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    overlay.classList.add('overlay-show');
  });

  close.addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
  });

  navHeader.classList.remove('main-header__nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navHeader.classList.contains('main-header__nav--closed')) {
      navHeader.classList.remove('main-header__nav--closed');
      navHeader.classList.add('main-header__nav--opened');
    } else {
      navHeader.classList.add('main-header__nav--closed');
      navHeader.classList.remove('main-header__nav--opened');
    }
  });

  const progress = document.querySelector('.progress');

  window.addEventListener('scroll', progressBar);

  function progressBar(e){
    var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var per = windowScroll / windowHeight * 100;
    progress.style.width = per + '%';
};
