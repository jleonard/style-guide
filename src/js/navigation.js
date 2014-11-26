(function(){

  var nav;

  document.addEventListener('DOMContentLoaded', function(event) {
    nav = document.querySelectorAll('#sidebar > ul')[0];
    var list = document.querySelectorAll('main > section > h2');
    [].forEach.call(list, function(el) {
      var link = el.parentNode;
      var li = document.createElement('li');
      li.textContent = el.textContent;
      li.setAttribute('href',link.getAttribute('id'));
      nav.appendChild(li);
    });

  });

})();