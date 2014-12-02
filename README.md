# Style Guide 

> A project skeleton for creating component tear-sheets and style guides.

## Getting Started
1. Install [Node + NPM](http://nodejs.org/)
2. Install [Harp](http://harpjs.com/)
3. Clone the repo

### Helpful harp commands
To run a server and live-reload as you work : ``harp server src --port 3000``  
To compile a static website : ``harp compile src dist``

### The project structure
```
src
├── _layout.ejs      // the layout template
├── _partials        // partials for style guide sections
├── css              // the .less files used for the styleguide
├── index.ejs        // the tearsheet   
└── js               // js files specific to the style guide functionality

```

## The Javascript
> **No 3rd party dependencies required! All .js is native to avoid conflicts with the libs used in the UI.**

```
src/js
├── code.snippets.js
├── color.palette.js
├── lorem.js
├── navigation.js
├── prism.js
└── annotation.js
```
---  
1. **``annotation.js``** - A quick way to expose an element's tag, class and style information. Good for exposing typography info.

> **Note** that this displays the browser's __computed styles__. Example, css's rem values will display as pixels.

**Showing tag and class info**  

```html
<h1 data-show-tag class='one two'></h1>

<!-- outputs -->
<h1 data-show-tag >The data-show-tag attribute is set as the element's :before pseduo element content.</h1>
``` 

**Showing style attributes**  

```html
<h1 data-show-style='font-family,font-size,line-height'>Sets a data-style attribute that is set as the element's :after pseduo element content.</h1>
```

---  
2. **``code.snippets.js``** - Wrap your component inside an element with the class ``.make-snippet`` and this .js will take your component's markup and copy it into a pre/code snippet that gets appended below the live example.

```html
<div class='make-snippet'>
  <h1>This is my component. It's just an h1 tag but I'm proud of it.</h1>
</div>
```

---  
3. **``color.palette.js``** - This automatically creates background-colors for the color palette section of the guide. If you follow the conventions for creating the color palette there's nothing you need to do here.

---  
4. **``lorem.js``** - A lorem ipsum generator.  

```html
<!-- generates two words of dummy text -->
<h1 data-lorem='2w'></h1>

<!-- generates two sentences of dummy text -->
<h1 data-lorem='2s'></h1>

<!-- generates two paragraphs of dummy text -->
<h1 data-lorem='2p'></h1>

<!-- generates between 2-5 sentences of dummy text -->
<h1 data-lorem='2-5s'></h1>
```
---   
5. **``navigation.js``** - Automatically builds the style guide's sidebar navigation by crawling each ``section > h2`` for title and ``section#id`` for anchor link.  

---  
6. **``prism.js``** - [prism.js](http://prismjs.com/) for syntax highlighting.

---

## Working with harp and the partials

### Using the color palette partial
```html
<!-- send your colors into the parial like so -->
<%- 
  partial("_partials/color-palette", {
    palette: {
      'Navy' : '#001F3F',
      'Blue' : '#0074D9',
      'Aqua' : '#7FDBFF',
      'Teal' : '#39CCCC',
      'Olive': '#3D9970',
      'Green': '#2ECC40',
      'Lime' : '#01FF70',
      'Yellow': '#FFDC00',
      'Orange': '#FF851B',
      'Red': '#FF4136',
      'Maroon': '#85144B',
      'Fuchsia': '#F012BE',
      'Purple': '#B10DC9',
      'Black': '#111',
      'Gray' : '#AAA',
      'Silver': '#DDD'
    }
  }) 
%>

<!-- outputs -->
<ul class="color-palette">
  <li title="#001F3F" data-name="Navy" style="background-color: rgb(0, 31, 63);"></li>
  <li title="#0074D9" data-name="Blue" style="background-color: rgb(0, 116, 217);"></li>
  <li title="#7FDBFF" data-name="Aqua" style="background-color: rgb(127, 219, 255);"></li>
  <li title="#39CCCC" data-name="Teal" style="background-color: rgb(57, 204, 204);"></li>
  <li title="#3D9970" data-name="Olive" style="background-color: rgb(61, 153, 112);"></li>
  <li title="#2ECC40" data-name="Green" style="background-color: rgb(46, 204, 64);"></li>
  <li title="#01FF70" data-name="Lime" style="background-color: rgb(1, 255, 112);"></li>
  <li title="#FFDC00" data-name="Yellow" style="background-color: rgb(255, 220, 0);"></li>
  <li title="#FF851B" data-name="Orange" style="background-color: rgb(255, 133, 27);"></li>
  <li title="#FF4136" data-name="Red" style="background-color: rgb(255, 65, 54);"></li>
  <li title="#85144B" data-name="Maroon" style="background-color: rgb(133, 20, 75);"></li>
  <li title="#F012BE" data-name="Fuchsia" style="background-color: rgb(240, 18, 190);"></li>
  <li title="#B10DC9" data-name="Purple" style="background-color: rgb(177, 13, 201);"></li>
  <li title="#111" data-name="Black" style="background-color: rgb(17, 17, 17);"></li>
  <li title="#AAA" data-name="Gray" style="background-color: rgb(170, 170, 170);"></li>
  <li title="#DDD" data-name="Silver" style="background-color: rgb(221, 221, 221);"></li>
  </ul>
```
