// do something!

const toggle = document.querySelector(".toggle")
const nav = document.querySelector("nav")
const body =document.querySelector("body")

if (localStorage.getItem('active') !== null) {
    nav.classList.add('active')
    
  body.classList.add('view')
} else{
    body.classList.add('view')

} 

toggle.addEventListener('click', togglefuntion)

function togglefuntion() {
   let antive = document.querySelector('nav.active')
    if(antive === null)
    {nav.classList.add('active')
    localStorage.setItem("active", 1)
         }
    
    else{nav.classList.remove('active')
    localStorage.removeItem("active");};
}

