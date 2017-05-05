# aspect-to-rect 

Find rectangle as close as possible to the desired aspect ratio within provided constraints. 

Common application is finding optimal canvas resolution for mobile web game. For example, you may have 640x1136 
background art and 640x832 game field. In this case you may want to fix canvas width to 640, and adjust
canvas height between 832 and 1136 to match device aspect ratio as close as possible.  

## Installation

```
$ npm install aspect-to-rect --save
```


## Usage

Find optimal canvas resolution for 1280x1920 screen: 

```javascript
var aspectToRect = require("aspect-to-rect");
aspectToRect(1280/1920, {
    width: 640,
    height: {min: 832, max: 1136}
})

// => {width: 640, height: 960} 

```

Same example for horizontal orientation: 

```javascript
var aspectToRect = require("aspect-to-rect");
aspectToRect(1920/1280, {
    width: {min: 832, max: 1136},
    height: 640
})

// => {width: 960, height: 640} 

```

Both orientations are supported: 

```javascript
var aspectToRect = require("aspect-to-rect");
aspectToRect(1920/1280, 
    [
        {
            width: 640,
            height: {min: 832, max: 1136}
        }, 
        {
           width: {min: 832, max: 1136},
           height: 640
        }
    ])

// => {width: 960, height: 640} 

```
