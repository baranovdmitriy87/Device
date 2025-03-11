const btnDropdown = document.querySelector(".header-catalog-btn");
const listWrapper = document.querySelector(".header-catalog-list-wrapper");
const isActiveFeaturesLinks = document.querySelectorAll(".header-content-features-link");
const showCatalogLinks = document.querySelectorAll(".header-catalog-link");
const tabs = document.querySelectorAll('.features-tab-link');
const contentItems = document.querySelectorAll('.features-content');


//  =============   features tabs
const toggleTabs = () => {
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', (evt) => {
      evt.preventDefault();
      tabs.forEach((el) => {
        el.classList.remove('is-active');
      }, { once: true });
      tab.classList.add('is-active');

      contentItems.forEach((item) => {
        item.classList.add('is-hidden');
      });
      contentItems[i].classList.remove('is-hidden');
    });
  });
}
toggleTabs();

// const navUserLink = document.querySelector(".nav-user-link span");
// const authUser = document.querySelector(".nav-link-auth");
// const authNoUser = document.querySelector(".nav-link-auth-active");

// const navUserShow = () => {

//   navUserLink.addEventListener('click', (evt) => {
//     evt.preventDefault();
//     authUser.classList.remove('nav-link-auth');
//     authNoUser.classList.add('nav-link-auth-active');
//     console.log ('click')
//   });
// }

// navUserShow();

//  ============  Инициализация слайдера
const initHeroSlider = () => {

  const slider = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,
    // effect:"fade",

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },


    // fadeeffect: {
    //   crossFade: true
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  return slider;
};

initHeroSlider();

//  =================  Показать список товаров каталога
const dropdownShow = () => {
  btnDropdown.addEventListener("click", () => {
    btnDropdown.classList.toggle("is-active");
    if (btnDropdown.classList.contains("is-active")) {
      listWrapper.classList.remove('closed')
      listWrapper.classList.add('opened')
    } else {
      listWrapper.classList.add('closed')
      listWrapper.classList.remove('opened')
    }
  });
}

dropdownShow();

// ===============   Показать активный features элемент
const featuresShow = () => {
  isActiveFeaturesLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      isActiveFeaturesLinks.forEach((el) => {
        el.classList.remove('is-active');
      });
      link.classList.add('is-active');
    });
  });
}

featuresShow();

// ============= Показать активный элемент в каталоге товаров
const catalogProductsShow = () => {
  showCatalogLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      showCatalogLinks.forEach((el) => {
        el.classList.remove('is-active');
      });
      link.classList.add('is-active');
    });
  });
}

catalogProductsShow();
