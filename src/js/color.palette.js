(function(){
  document.addEventListener('DOMContentLoaded', function(event) {

    var list = document.querySelectorAll('.color-palette > li');

    [].forEach.call(list, function(el) {
      el.style.backgroundColor = el.getAttribute('title');
    });

  });
})();