// doc-loader
const docloader = document.getElementById('doc-loader')
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
      if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
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
      if (opacity[i].getBoundingClientRect().top < window.innerHeight / 1.1) {
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


// Hover to Moving
// html
//id="card"
// class="card"
// onmousemove="onMouseMove(event)"
// onmouseleave="onMouseLeave(event)"

const cardWidth = 500,
   degIncrement = 5,
   card = document.getElementById("card-hover");

const getRotateDeg = (input) => {
   if (input < cardWidth * 0.33) {
      return `-${degIncrement * 3}deg`;
   } else if (input >= cardWidth * 0.33 && input < cardWidth * 0.66) {
      return `-${degIncrement}deg`;
   } else if (input >= cardWidth * 0.66 && input < cardWidth * 0.5) {
      return "0deg";
   } else if (input >= cardWidth * 0.5 && input < cardWidth * 0.33) {
      return `${degIncrement}deg`;
   } else {
      return `${degIncrement * 3}deg`;
   }
};

const onMouseMove = (event) => {
   const { target } = event;
   const rect = target.getBoundingClientRect();

   const rotateX = getRotateDeg(event.clientY - rect.top);
   const rotateY = getRotateDeg(event.clientX - rect.left);

   card.style.transform = `rotateX(${rotateX}) rotateY(${rotateY})`;
};

const onMouseLeave = () => {
   card.style.transform = `none`;
};

// progress bar
let calcScrollValue = () => {
   // let scrollProgress = document.getElementById("progress");
   // let progressValue = document.getElementById("progress-value");
   let toplinght = document.getElementById("toplinght");
   let pos = document.documentElement.scrollTop;
   let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
   let scrollValue = Math.round((pos * 100) / calcHeight);
   // if (pos > 100) {
   //   scrollProgress.style.display = "grid";
   // }
   //  else {
   //   scrollProgress.style.display = "none";
   // }
   // scrollProgress.addEventListener("click", () => {
   //   document.documentElement.scrollTop = 0;
   // });
   // scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
   toplinght.style.width = `${scrollValue}%`;
   // document.getElementById("deepsinh").style.background = `conic-gradient(yellow ${scrollValue}%,black ${scrollValue}%,teal ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// cursor

var clientX = -100;
var clientY = -100;
var innerCursor = document.querySelector(".cursor");

var initCursor = function initCursor() {
   // add listener to track the current mouse position
   document.addEventListener("mousemove", function (e) {
      clientX = e.clientX;
      clientY = e.clientY;
   });

   // transform the innerCursor to the current mouse position
   // use requestAnimationFrame() for smooth performance
   var render = function render() {
      innerCursor.style.transform = 'translate(' + clientX + 'px, ' + clientY + 'px)';
      // if you are already using TweenMax in your project, you might as well
      // use TweenMax.set() instead
      // TweenMax.set(innerCursor, {
      //   x: clientX,
      //   y: clientY
      // });

      requestAnimationFrame(render);
   };
   requestAnimationFrame(render);
};

initCursor();


//dark mode
const modkbtn = document.getElementById("togal-dark");
const body = document.body;
function myfunction() {
   if (body.classList.contains("dark-light")) {
      body.classList.remove("dark-light")
      modkbtn.textContent = "dark"
   } else {
      body.classList.add("dark-light")
      modkbtn.textContent = "light"
   }
}
modkbtn.addEventListener("click", myfunction);