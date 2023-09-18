const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click',()=> {
    menuMobile.classList.toggle('menu__open');
})


const swiperOne = new Swiper('.feedback__slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiperTwo = new Swiper('.certificates__slider', {

    loop: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      640:{
        slidesPerView: 3,
    spaceBetween: 2,
      },
      480: {
        slidesPerView: 2,
      },
      360: {
        slidesPerView: 1,
      }
    },
  });

  const accordion = document.querySelector('.accordion');
  const accordionTitles = accordion.querySelectorAll('.accordion__title');

  accordionTitles.forEach.call(accordionTitles, function(accordionTitle) {
    accordionTitle.addEventListener('click', function(){
      const currentText = accordionTitle.parentElement.querySelector('.accordion__text');
      accordionTitle.classList.toggle('accordion__title--active');
      currentText.classList.toggle('accordion__text--visible');

      if (currentText.classList.contains('accordion__text--visible')) {
        currentText.style.maxHeight = currentText.scrollHeight + 'px'
      } else {
        currentText.style.maxHeight = null;
      }
    })
  })