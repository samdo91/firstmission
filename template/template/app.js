// do something!
const toggle = document.querySelector(".toggle")
const nav = document.querySelector("nav")
const body = document.querySelector("body")





if (localStorage.getItem('active') !== null) {
     nav.classList.add('active')
     setTimeout(function () {
         console.log("3초");
          body.classList.add('view');
     }, 500);


} else {
     setTimeout(function () {
          body.classList.add('view');
          console.log("3초");
     }, 500);

}


toggle.addEventListener('click', togglefuntion)

function togglefuntion() {
     let antive = document.querySelector('nav.active')
     if (antive === null) {
          nav.classList.add('active')
          localStorage.setItem("active", 1)
     }

     else {
          nav.classList.remove('active')
          localStorage.removeItem("active");
     };
}

