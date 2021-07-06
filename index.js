//   open and close menus

let menu_btn = document.querySelectorAll(".menu-img");
let menuCloseBtn = document.querySelectorAll(".menu-close");
let menu = document.querySelectorAll(".menu-catalog");
let opacityElements = document.querySelectorAll(".opacity-layout > *:not(nav), #menu-main-nav");

for (let i = 0; i < menu_btn.length; i++) {
    menu_btn[i].onclick = () => {
        for (x of opacityElements) {
            x.style.opacity = "0.5";
        }
        menu[i].style.display = "block";
    };
}

for (let i = 0; i < menuCloseBtn.length; i++) {
    menuCloseBtn[i].onclick = () => {
        if (menu_carrinho[i].style.display !== "block") {
            for (x of opacityElements) {
                x.style.opacity = "1";
            }
        }
        menu[i].style.display = "none";
    };
}


let menu_shop_cart_btn = document.querySelectorAll(".shopping-cart-btn");
let menu_continuar_btn = document.querySelectorAll(".menu-carrinho-continuar");
let menu_carrinho = document.querySelectorAll(".menu-carrinho");

for (let i = 0; i < menu_shop_cart_btn.length; i++) {
    menu_shop_cart_btn[i].onclick = () => {
        for (x of opacityElements) {
            x.style.opacity = "0.5";
        }
        menu_carrinho[i].style.display = "block";
    };
}

for (let i = 0; i < menu_continuar_btn.length; i++) {
    menu_continuar_btn[i].onclick = () => {
        if (menu[i].style.display !== "block") {
            for (x of opacityElements) {
                x.style.opacity = "1";
            }
        }
        menu_carrinho[i].style.display = "none";
    };
}


// open and close subtypes in the catalog menu

let types = document.querySelectorAll(".type-container");

for (let i = 0; i < types.length; i++) {
    types[i].addEventListener("click", open);
}

function open() {
    let subtypes = this.nextElementSibling;
    subtypes.style.display = "block";
    let icon = this.childNodes[1].childNodes[1];
    icon.innerHTML = "&#8212;";
    this.removeEventListener("click", open);
    this.addEventListener("click", close);
}

function close() {
    let subtypes = this.nextElementSibling;
    subtypes.style.display = "none";
    let icon = this.childNodes[1].childNodes[1];
    icon.innerHTML = "+";
    this.removeEventListener("click", close);
    this.addEventListener("click", open);
}

// let scrollBlock = document.querySelector(".products-tablet");
// console.log(scrollBlock);
// scrollBlock.scrollLeft = 100;



let scrollBlock = document.getElementsByClassName("products-block")[1];
// console.log(scrollBlock.scrollHeight);
// console.log(scrollBlock.scrollHeight / 3);
window.onload = () => { scrollBlock.scrollLeft = (scrollBlock.scrollHeight / 3.5) }