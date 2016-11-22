// Всплывающее окно "Напишите нам"
var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-write-us");

if (link && popup) {
  var close = popup.querySelector(".modal-content-close");
  var form = popup.querySelector(".form-write-us");
  var names = popup.querySelector("[id=write-us-name]");
  var email = popup.querySelector("[id=write-us-email]");
  var storage = localStorage.getItem("name");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-show");
    if (storage) {
      names.value = storage;
      email.focus();
    } else {
      names.focus();
    }
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    if (!names.value || !email.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      localStorage.setItem("name", names.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });
}

// Всплывающее окно "Карта"
var map_open = document.querySelector(".contacts-map");
var map_over = document.querySelector(".modal-overlay");
var map_popup = document.querySelector(".modal-map");

if (map_open && map_over && map_popup) {

  var map_close = map_popup.querySelector(".modal-content-close");

  map_open.addEventListener("click", function(event) {
    event.preventDefault();
    map_popup.classList.add("modal-show");
    map_over.classList.add("modal-show");
  });

  map_close.addEventListener("click", function(event) {
    event.preventDefault();
    map_popup.classList.remove("modal-show");
    map_over.classList.remove("modal-show");
  });

  map_over.addEventListener("click", function(event) {
    event.preventDefault();
    map_popup.classList.remove("modal-show");
    map_over.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (map_popup.classList.contains("modal-show")) {
        map_popup.classList.remove("modal-show");
        map_over.classList.remove("modal-show");
      }
    }
  });
}

// Всплывающее окно "Товар добавлен в корзину"
var tocart = document.querySelectorAll(".btn-tocart");
var cart_add = document.querySelector(".modal-product-add");

if (tocart && cart_add) {

  var cart_close = cart_add.querySelector(".modal-content-close");
  var cart_conti = cart_add.querySelector(".btn-continue");

  Array.prototype.forEach.call(tocart, function(button) {
    button.addEventListener("click", function(event) {
      event.preventDefault();
      cart_add.classList.add("modal-show");
    });
  });

  cart_close.addEventListener("click", function(event) {
    event.preventDefault();
    cart_add.classList.remove("modal-show");
  });

  cart_conti.addEventListener("click", function(event) {
    event.preventDefault();
    cart_add.classList.remove("modal-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (cart_add.classList.contains("modal-show")) {
        cart_add.classList.remove("modal-show");
      }
    }
  });
}
