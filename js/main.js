window.onscroll = scrollFunction;
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").classList.add('small');
    } else {
        document.getElementById("header").classList.remove('small')
    }
}

$(document).ready(function() {
  const menuButton = document.querySelector('#menu__toggle');
  const menuItems = document.querySelectorAll('.menu__item');
  Array.from(menuItems).forEach(menuItem => {
      menuItem.addEventListener('click', () => {
          menuButton.checked = false;
      })
  })
})
