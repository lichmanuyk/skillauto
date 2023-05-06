$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 3,
    dots: false,
    loop: true,
    autoplay:true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<img src='img/back.png'>", "<img src='img/next.png'>"],
    margin: 25,
    center: true,
    mouseDrag: false,
    smartSpeed: 1500,
    responsive:{
      0: {
        items: 1
      },

      600: {
        items: 1
      },

      750: {
        items: 2
      },

      1100: {
        items: 3
      },

      1366: {
        items: 3
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  if(window.ResizeObserver) {
    const carouselContainer = document.querySelector('.carousel-container');
    const scrollDown = document.querySelector('.scroll_down_info');
    const owlItems = document.querySelectorAll('.owl-item');

    const resizeObserver = new ResizeObserver(entry => {
      const element = entry[0];
      const elementHeight = element.contentRect.height;
      const scrollDownHeight = Math.ceil(scrollDown.getBoundingClientRect().height) + 20;
      const imgHeight = elementHeight - scrollDownHeight - 50;
      const imgWidth = imgHeight * 0.75;
      owlItems.forEach(item => {
        const img = item.childNodes[0];
        item.style.height = `${imgHeight}px`;
        img.style.height = `${imgHeight}px`;
        img.style.width = `${imgWidth}px`;
      })
    });
    resizeObserver.observe(carouselContainer);
  }
}, false)