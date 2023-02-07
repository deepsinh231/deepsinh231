// doc-loader
$('.doc-loader').fadeOut('fast');

// navToggler
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);
function navToggle() {
   navToggler.classList.toggle("active");
   const nav = document.querySelector(".nav");
   nav.classList.toggle("open");
   if (nav.classList.contains("open")) {
      nav.style.maxHeight = nav.scrollHeight + "px";
   }
   else {
      nav.removeAttribute("style");
   }
}

// togalgal
// const bar = document.querySelector(".bar");
// const navbar = document.querySelector('.header-text');

// bar.addEventListener("click", () => {
//     bar.classList.toggle("active");
//     navbar.classList.toggle('active')
// });

// let btn = document.querySelector(".bar");
// let icon = btn.querySelector(".fa-bars");
// btn.onclick = function () {
//     if (icon.classList.contains("fa-bars")) {
//         icon.classList.replace("fa-bars", "fa-times");
//     } else {
//         icon.classList.replace("fa-times", "fa-bars");

//     }
// }


// scrroll
window.addEventListener("scroll", function () {
   var deep = document.querySelector("header")
   deep.classList.toggle("sticky", window.scrollY > 0);

})


// data-filter
// let list = document.querySelectorAll('.btn_1');
// let itemBox = document.querySelectorAll('.itemBox');

// for (let i = 0; i < list.length; i++) {
//     list[i].addEventListener('click', function () {
//         for (let j = 0; j < list.length; j++) {
//             list[j].classList.remove('btn_1_active')
//         }
//         this.classList.add('btn_1_active');

//         let dataFilter = this.getAttribute('data-filter');

//         for (let k = 0; k < itemBox.length; k++) {
//             itemBox[k].classList.remove('hide');
//             itemBox[k].classList.add('hide');

//             if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
//                 itemBox[k].classList.remove('hide');
//                 itemBox[k].classList.add('btn_1_active');
//             }
//         }
//     })
// }


// releav 
// && (revealElements[i].getBoundingClientRect().bottom > window.innerHeight / 3)
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
   for (let i = 0, len = revealElements.length; i < len; i++) {
      if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1 && (revealElements[i].getBoundingClientRect().bottom > window.innerHeight / 3)) {
         revealElements[i].classList.add("revealed");
      }
      else {
         revealElements[i].classList.remove("revealed");

      }
   }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
   revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// releav opacity 
const opacity = document.querySelectorAll("[data-opacity]");
const opacityDelayElements = document.querySelectorAll("[data-opacity-delay]");
// && (opacity[i].getBoundingClientRect().bottom > window.innerHeight / 3)
const opacity1 = function () {
   for (let i = 0, len = opacity.length; i < len; i++) {
      if (opacity[i].getBoundingClientRect().top < window.innerHeight / 1.1 && (opacity[i].getBoundingClientRect().bottom > window.innerHeight / 3)) {
         opacity[i].classList.add("Portano");
      }
      else {
         opacity[i].classList.remove("Portano");

      }
   }
}

for (let i = 0, len = opacityDelayElements.length; i < len; i++) {
   opacityDelayElements[i].style.transitionDelay = opacityDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", opacity1);
window.addEventListener("load", opacity1);


// // typing text animation script 
// $(document).ready(function () {
//    // typing text animation script 
//    var typed = new Typed(".typing", {
//       strings: ["Restaurant ", "Hotel"],
//       typeSpeed: 100,
//       backSpeed: 60,
//       loop: true
//    });
// });
