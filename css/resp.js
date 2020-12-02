burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navList')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
  navList.classList.toggle('v-nav');
  rightNav.classList.toggle('v-nav');
  navbar.classList.toggle('h-nav');
})

