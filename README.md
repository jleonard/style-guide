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
└── style.annotation.js
```

---  
1. **``code.snippets.js``** - Wrap your component inside an element with the class ``.make-snippet`` and this .js will take your component's markup and copy it into a pre/code snippet that gets appended below the live example.

```html
<div class='make-snippet'>
  <h1>This is my component. It's just an h1 tag but I'm proud of it.</h1>
</div>
```
---  
2. **``color.palette.js``** - This automatically creates background-colors for the color palette section of the guide. If you follow the conventions for creating the color palette there's nothing you need to do here.


