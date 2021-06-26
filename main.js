/* toggle menu */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* menu links */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* nav scroll shadow */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScrolled() {
  if (window.scrollY >= navHeight) {
    // scroll is higher than header height
    header.classList.add('scroll')
  } else {
    // scroll is smaller than header heigh
    header.classList.remove('scroll')
  }
}

// testimonials carousel/slider swiper

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scrollreveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image,
  #home .text,
  #about .image, #about .text,
  #products header, #products .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .logo, footer .brand, footer .social`,
  { interval: 100 }
)

// back to top button
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 920) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* active menu in visible page */
const sections = document.querySelectorAll('main section[id]')
function activeMenuSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScrolled()
  backToTop()
  activeMenuSection()
})
