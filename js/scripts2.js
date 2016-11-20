 // Всплывающее окно "Товар добавлен в корзину"   

    var tocart = document.querySelector(".btn-tocart");
// работает только с первым селектором .btn-tocart 

    var cart_add = document.querySelector(".modal-product-add");
    var cart_close = cart_add.querySelector(".modal-content-close");
    var cart_conti = cart_add.querySelector(".btn-continue");


    tocart.addEventListener("click", function(event) {
      event.preventDefault();
      cart_add.classList.add("modal-show");
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