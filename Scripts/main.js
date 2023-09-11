window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 0);
  });

$(document).ready(function() {
    $('.fade-in').addClass('fade-in');
  });