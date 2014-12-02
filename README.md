# Style Guide 

> A project skeleton for creating component tear-sheets and style guides.

## Getting Started
1. Install [Node + NPM](http://nodejs.org/)
2. Install [Harp](http://harpjs.com/)

### The project structure
```
src
├── _layout.ejs      // the layout template
├── _partials        // partials for style guide sections
├── css              // the .less files used for the styleguide
├── index.ejs        // the tearsheet   
└── js

```

### The Javascript
**No 3rd party dependencies required! All .js is native to avoid conflicts with the libs used in the UI.**

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
1. **``code.snippets.js``** - Wrap your component in an element with ``.make-snippet`` and your component's markup will be copied into a pre/code snippet that gets appended below the live example.

```html
<div class='make-snippet'>
  <h1>This is my component. It's just an h1 tag but I'm proud of it.</h1>
</div>
```
---
2. **``color.palette.js``** - TODO

```html
<div class='make-snippet'>
  <h1>This is my component. It's just an h1 tag but I'm proud of it.</h1>
</div>
```

