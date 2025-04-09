// активный элемент в каталоге товаров в header
const showCatalogLinks = document.querySelectorAll(".header-catalog-link");
// активный элемент услуг в header
const isActiveServicesHeaderLinks = document.querySelectorAll(".header-content-services-link");
// имитация входа/выхода пользователя
const navUserLink = document.querySelector(".nav-user-link");
const authUser = document.querySelector(".nav-link-auth");
const authActiveUser = document.querySelector(".nav-link-auth-active");
// показать тултип в корзине товаров
const tooltipLink = document.querySelector('.nav-site-link-tooltip');
const tooltip = document.getElementById('tooltip-cart');
// табы с услугами
const tabs = document.querySelectorAll('.services-tab-link');
const contentItems = document.querySelectorAll('.services-content');
// валидация формы для отправки
const subscribeForm = document.getElementById('subscribe-form');
const subscribeFormField = document.getElementById('user-email');
const formError = document.querySelector('.subscribe-form-error');
// активный элемент услуг в footer
const isActiveServicesFooterLinks = document.querySelectorAll(".footer-services-link");
// открытие модального окна
const modal = document.querySelector(".modal-container");
const openModalBtn = document.getElementById("modal-open-btn");
const closeModalBtn = document.getElementById("modal-close-btn");
// валидация формы модального окна
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
// const elementsToHide = document.querySelectorAll('.form-field-info');
const formFieldName = document.querySelector('.form-field-info-name');
const formFieldMail = document.querySelector('.form-field-info-mail');


/*   ==============  tooltip-cart  ============== */
const tooltipShow = () => {

  // Показываем/скрываем тултип при клике на ссылку
  tooltipLink.addEventListener('click', function (event) {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    tooltip.classList.toggle('visible'); // Переключаем видимость тултипа
  });

  // Скрываем тултип при клике вне его области
  document.addEventListener('click', function (event) {
    if (!tooltip.contains(event.target) && event.target !== tooltipLink) {
      tooltip.classList.remove('visible');
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      tooltip.classList.remove('visible');
    }
  });
}

tooltipShow();

/*  ==============   services tabs  ==============  */
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

/* ==============   Вход/выход аккаунта   ============== */
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

/*  ==============  Инициализация слайдера  ==============  */
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

/* ============== Показать активный services элемент в header  ==============  */
const showActiveServicesHeaderElement = () => {
  isActiveServicesHeaderLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      isActiveServicesHeaderLinks.forEach((el) => {
        el.classList.remove('is-active');
      });
      link.classList.add('is-active');
    });
  });
}

showActiveServicesHeaderElement();

/* ============== Показать активный элемент в каталоге товаров ============== */
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


/* ==============   Показать активный элемент услуг в footer   ============== */
const showActiveServicesFooterElement = () => {
  isActiveServicesFooterLinks.forEach((link) => {
    link.addEventListener('click', (evt) => {
      evt.preventDefault();
      isActiveServicesFooterLinks.forEach((el) => {
        el.classList.remove('is-active')
      })
      link.classList.add('is-active')
    })
  })
}

showActiveServicesFooterElement();


/* ============== Валидация формы subscribe-form   ============== */
const subscribeFormValidate = () => {

  subscribeForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    if (subscribeFormField.value.trim() === '') {
      // Если поле пустое, меняем плейсхолдер и показываем ошибку
      subscribeFormField.placeholder = "ошибка";
      subscribeFormField.classList.add('subscribe-form-error'); // Добавляем класс для стилизации
    } else {
      subscribeFormField.classList.remove('subscribe-form-error'); // Убираем класс ошибки
    }
  });
}

subscribeFormValidate();

/*   ==============  Modal Window  ============== */

const showModalContacts = () => {
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      modal.classList.add('modal-container-close');
    }
  });

  // открытие модального окна
  openModalBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (openModalBtn) {
      modal.classList.remove('modal-container-close');
      userName.focus();
    }
  });

  // закрытие модального окна по кнопке
  closeModalBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (closeModalBtn) {
      modal.classList.add('modal-container-close');
    }
  });
}

showModalContacts();


/* ============== Валидация формы modal   ============== */
function showError(input, message) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('success');
  formGroup.classList.add('error');
  const errorMessage = formGroup.querySelector('.error-message');
  errorMessage.textContent = message;
}

function showSuccess(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove('error');
  formGroup.classList.add('success');
  const errorMessage = formGroup.querySelector('.error-message');
  errorMessage.textContent = '';
}

function validateName() {
  const value = nameInput.value.trim();
  if (value === '') {
    formFieldName.style.display = "none"
    showError(nameInput, 'Имя обязательно для заполнения');
    return false;
  } else if (value.length < 2) {
    formFieldName.style.display = "none"
    showError(nameInput, 'Имя должно быть не короче 2 символов');
    return false;
  } else {
    formFieldName.style.display = "block"
    showSuccess(nameInput);
    return true;
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (value === '') {
    formFieldMail.style.display = "none"
    showError(emailInput, 'Email обязателен для заполнения');
    return false;
  } else if (!re.test(value)) {
    formFieldMail.style.display = "none"
    showError(emailInput, 'Забавный у вас адрес');
    return false;
  } else {
    formFieldMail.style.display = "block"
    showSuccess(emailInput);
    return true;
  }
}


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  if (isNameValid && isEmailValid) {
    // Форма валидна, можно отправлять данные
    form.reset();
    alert('Форма успешно отправлена!');
  }
});

// Валидация при вводе
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
