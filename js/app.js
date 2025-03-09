const btnDropdown = document.querySelector(".header-catalog-btn");
const listWrapper = document.querySelector(".header-catalog-list-wrapper");
const isActiveFeaturesLinks = document.querySelectorAll(".header-content-features-link");
const showCatalogLinks = document.querySelectorAll(".header-catalog-link");
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

// Показать список товаров каталога
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

// Показать активный features элемент
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

// Показать активный элемент в каталоге товаров
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
