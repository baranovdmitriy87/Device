const btnDropdown = document.querySelector(".header-catalog-btn");
const listWrapper = document.querySelector(".header-catalog-list-wrapper");
const isActiveServicesLinks = document.querySelectorAll(".header-content-services-link");
const showCatalogLinks = document.querySelectorAll(".header-catalog-link");

const tabs = document.querySelectorAll('.services-tab-link');
const contentItems = document.querySelectorAll('.services-content');

const navUserLink = document.querySelector(".nav-user-link");
const authUser = document.querySelector(".nav-link-auth");
const authActiveUser = document.querySelector(".nav-link-auth-active");


//  =============   services tabs
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

/*   ==========   Вход/выход аккаунта   ========= */
const navUserShow = () => {

  navUserLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (navUserLink.classList.toggle('nav-user-link')) {
      authActiveUser.classList.add
      authActiveUser.style.display = 'inline-flex'
      authUser.style.display = 'none'
    } else {
      authUser.style.display = 'inline-flex'
      authActiveUser.style.display = 'none'
    }
  });
}

navUserShow();

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

//  ============  Инициализация слайдера
const initHeroSlider = () => {

  new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    allowTouchMove: false,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
};

initHeroSlider();

// ===============   Показать активный services элемент
const servicesShow = () => {
  isActiveServicesLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      isActiveServicesLinks.forEach((el) => {
        el.classList.remove('is-active');
      });
      link.classList.add('is-active');
    });
  });
}

servicesShow();

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
