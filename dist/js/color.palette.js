/*
 *
 * 1. Create a <ul> with class 'color-palette'
 * 2. Create an <li> for each color in your palette.
 * 3. Each <li> should have its title attribute set the the color value.
 * 4. Each <li> should have its color name set as its data-name
 *
 * Example:
 * <li title='red' data-name='Error State Red'></li>
 * 
 * The .css in src/css/_includes/color-palette.less sets
 * the :before pseudo element on each <li> to display
 * the color and color name properties
 *
 * The .js below will set each <li>'s background-color to the title attr
 * to save the hassle of making a convenience class for each color.
 * 
 */

(function(){
  document.addEventListener('DOMContentLoaded', function(event) {

    var list = document.querySelectorAll('.color-palette > li');

    [].forEach.call(list, function(el) {
      el.style.backgroundColor = el.getAttribute('title');
    });

  });
})();