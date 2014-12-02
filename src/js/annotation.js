(function(){

  document.addEventListener('DOMContentLoaded', function(){

    var elements = document.querySelectorAll('[data-show-styles]');
    Array.prototype.forEach.call(elements, function(el, i){
      var attr = el.getAttribute('data-show-styles');
      if(attr){
        var properties = attr.split(',');
        var list = '';
        var style = window.getComputedStyle(el);
        var len = properties.length;
        for(var ii = 0; ii < len; ii++){
          var cur = properties[ii];
          var hyphen = cur.indexOf('-');
          if(hyphen > -1 && hyphen !== 0){
            cur = cur.substr(0,hyphen) + cur.substr(hyphen + 1,1).toUpperCase() + cur.substr(hyphen + 2);
          }
          list += properties[ii] + ': '+style[cur] + '; ';
        }
        el.setAttribute('data-styles',list);
      }
    });


    // tag annotation
    elements = document.querySelectorAll('[data-show-tag]');
    Array.prototype.forEach.call(elements, function(el, i){
      var list = '';
      if(el.hasAttribute('data-show-tag')){
        list += el.tagName.toLowerCase();
        var classList = el.classList;
        if(classList.length > 0){
          classList = '.'+classList.toString().replace(/ /g,'.');
          list += classList;
        }
        el.setAttribute('data-show-tag',list);
      }
    });

  });

})();