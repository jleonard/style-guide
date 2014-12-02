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
```
<h1 data-show-tag class='one two'></h1>

<!-- outputs -->
<h1 data-show-tag >The data-show-tag attribute is set as the element's :before pseduo element content.</h1>
``` 

**Showing style attributes**
```
<h1 data-show-style='font-family,font-size,line-height'>Sets a data-style attribute that is set as the element's :after pseduo element content.</h1>
```
---  
2. **``code.snippets.js``** - Wrap your component inside an element with the class ``.make-snippet`` and this .js will take your component's markup and copy it into a pre/code snippet that gets appended below the live example.

```
<div class='make-snippet'>
  <h1>This is my component. It's just an h1 tag but I'm proud of it.</h1>
</div>
```
---  
3. **``color.palette.js``** - This automatically creates background-colors for the color palette section of the guide. If you follow the conventions for creating the color palette there's nothing you need to do here.
---
4. **``lorem.js``** - A lorem ipsum generator.
```
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

