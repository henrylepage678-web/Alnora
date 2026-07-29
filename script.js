document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.navlinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  var slider = document.querySelector('.compare-slider');
  var before = document.querySelector('.img-before');
  var handle = document.querySelector('.handle');
  if (slider && before && handle) {
    slider.addEventListener('input', function () {
      var value = slider.value;
      before.style.width = value + '%';
      handle.style.left = value + '%';
    });
  }

  var surveyForm = document.querySelector('.survey-wrap');
  if (surveyForm && surveyForm.tagName === 'FORM') {
    surveyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Merci ! Cette démo ne connecte pas encore le sondage à une base de données — à brancher lors de la mise en ligne.');
    });
  }
});
