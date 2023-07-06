const elBtn = document.querySelector('.button')
const elHeader = document.querySelector('header')

window.addEventListener('scroll', function(){
if(this.window.scrollY > 300){
   elBtn.style.display = 'block'
    elHeader.classList.add('shadow-fight-2')
}

else(
  elBtn.style.display = 'none',
   elHeader.classList.remove('shadow-fight-2')
)
})


elBtn.addEventListener('click', function(){
  window.scrollTo({
    top: 0 ,
    left: 0 ,
    behavior: 'smooth'
  })
} )