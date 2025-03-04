const btnDropdown = document.querySelector(".header-catalog-btn");

// Показать подменю каталога товаров
const dropdownShow = () => {
  btnDropdown.addEventListener("click", (event) => {
    btnDropdown.classList.toggle("is-active");
    const catalogProductList = btnDropdown.nextElementSibling;
    if (btnDropdown.classList.contains("is-active")) {
      catalogProductList.style.maxHeight = catalogProductList.scrollHeight + "px";
    } else {
      catalogProductList.style.maxHeight = 0;
    }
  });
}

dropdownShow();
