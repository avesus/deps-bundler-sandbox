/** @jsx html */

// TypeScript support
/// <reference path="ambient.d.ts"/>

// Snabbdom support

/*
import { html } from 'snabbdom-react-jsx';
const React = {
  createElement: html
};

var snabbdom = require('snabbdom');
var patch = snabbdom.init([ // Init patch function with choosen modules
  // require('snabbdom/modules/class'), // makes it easy to toggle classes
  require('snabbdom/modules/props'), // for setting properties on DOM elements
  require('snabbdom/modules/style'), // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners'), // attaches event listeners
]);
*/


// React support
import * as React from 'react';
import * as ReactDOM from 'react-dom';


var container = require('./container');
container = document.getElementById('container');

function getRenderer (container) {
  var prevNode = container;
  function render (vNode) {
    // Snabbdom
    //prevNode = patch(prevNode, vNode);

    // React
    ReactDOM.render(vNode, container);
  }

  return render;
}



if (module.hot) {
  
  console.log('this module is hot!');//, module.hot);
  module.hot.accept('./ma.js', function (prevThis) {
    console.log(prevThis);
  });
}


const bb = require('./bb');




/*
import most from 'most';
import q from 'q';
import rx from 'rxjs';
import lodash from 'lodash';
import punycode from 'punycode';


import 'zone.js';
import 'reflect-metadata';


require("angular2/common");
require("angular2/compiler");
require("angular2/http");
require("angular2/router");
require("angular2/upgrade");
// require("core-js");

require("angular2-in-memory-web-api");
window.jQuery = require("jquery");
require("bootstrap");
*/


const csjs = require('csjs');
const classNames = require('classnames');
let buttonType = 'primary';
console.log(classNames({ [`btn-${buttonType}`]: true }));

/*
import { Component } from 'angular2/core';

export const MyComponent = Component({
  selector: 'my-component',
  template: '<div>Hello my name is {{name}}. <button class="' + classNames({btn: true, [`btn-${buttonType}`]: true}) + '"(click)="sayMyName()">Say my name</button></div>'
})
.Class({
  constructor() {
    this.name = 'Max'
  },
  sayMyName() {
    console.log('My name is', this.name)
  }
});

import { bootstrap } from 'angular2/platform/browser';

bootstrap(MyComponent);
*/


var error: string = '';

var assign = require('object.assign/polyfill')();
Object.assign = assign;

const jsonLoaded = require('./abcd.json');

const Markdown = require('react-markdown');

let markdownInput = '# This is a header\n\nAnd this is a paragraph';



const green: string = '#33aa22';



const styles = csjs`

  /* ${__filename} */

  @-webkit-keyframes yellow-fade {   
     0% {background: yellow;}
     100% {background: none;}
  }

  @keyframes yellow-fade {
     0% {background: yellow;}
     100% {background: none;}
  }

  .highlight {
     -webkit-animation: yellow-fade 2s ease-in 1;
     animation: yellow-fade 2s ease-in 1;
  }

  .panel {
    border: 1px solid black;
    background-color: ${green};
  }
  .title {
    padding: 4px;
    font-size: 15px;
  }

`;

const css = csjs.getCss(styles);
var insertCss = require('insert-css');
insertCss(css + '\n' + '//# \u0073ourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VSb290IjoiaHR0cDovL2V4YW1wbGUuY29tL2FwcC9qcy8ifQ==');


var timing: string = '';
if (window.performance) {
  var pageLoadTiming: {
      code?: number;
    } = {};
  for(var k in window.performance.timing) {
    if (k !== 'toJSON') {
      pageLoadTiming[k] = window.performance.timing[k];
    }
  }

  pageLoadTiming.code = (new Date()).valueOf();
  timing = JSON.stringify(pageLoadTiming, null, 2);
}


function iOS8Minus (): boolean {
  if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
    return window.performance ? false : true;
  }

  return false;
}

var iOSBugfix = iOS8Minus();




function foo_(files1, files2) {

  var size = 0;
  /*
  if (false && files1) {
    try {
    var file_blob = files1[0];
    size = 1111;
    var newFile1 = file_blob.slice(0, 10);

    var blob = new Blob([file_blob, "blobText"], {type: "text/plain"});
    // size = file_blob.size;
    size = newFile1.size;
    // size = blob.size;
    } catch (err) {
      socket.send(err.message);
      //console.log(err);
    }
  }
  */

  return (<div className={styles.highlight}>
    {error}
    <pre style={{fontSize: '10px'}}>{timing}</pre>

    { files2 && <h1>Files 2 {files2[0].size}</h1> }

    { files1 && <h1>Files 1 {files1[0].size}</h1> }

    {window.Worker && <h1>Hello here!</h1> }
    <a className={styles.panel} href="#" id="fileSelect"
    onclick={

      function (e) {
        var fileElem = document.getElementById("files");
        if (fileElem) {
          fileElem.click();
        }
        e.preventDefault();
      }
    }
    >Select some files</a>
    { iOSBugfix &&
       (
       <div>
     <input type="file"
      // Select list of photos
      accept="image/*"
      multiple
      id="files"
      style={{display: 'none'}}
      onChange={function () {
        render(foo_(this.files, files2));
      }}
    />
    <input type="file"
     // Take a photo
     accept="image/*"
     onChange={function () {
      // console.log(this.files);
      render(foo_(files1, this.files));
    }}/><br/>
    <input type="file"
     // Take or select a video
     accept="video/*"
     onChange={function () {
      // console.log(this.files);
      render(foo_(files1, this.files));
    }}/><br/></div>

    ) ||

    (<input type="file"
      multiple
      id="files"
      style={{display: 'none'}}
      onChange={function () {
      render(foo_(this.files, files2));
    }}
    />) }

    <br/>
    Reloading works<br/>
    <input type="file"
     // Take photo or video or chose one single file.
     onChange={function () {
      // console.log(this.files);
      render(foo_(files1, this.files));
    }}/><br/>
    

  </div>);
}




var files: File[] = [{ size: 0 } as File];

var windowURL = window.URL || window.webkitURL;

var duration = 0;

function foo () {
  var preview = <div></div>;
  if (files[0].size) {
    // TODO: preview images for most formats
    const imageType = /^image\//;
    const videoType = /^video\//;
    
    if (imageType.test(files[0].type)) {
      preview = <div>
        <img src={windowURL.createObjectURL(files[0])}
        height="60"
        onload={function() {
          window.URL.revokeObjectURL(this.src);
        }}
        />
        </div>;
    } else if (videoType.test(files[0].type)) {
/*      var reader = new window.FileReader();
      reader.onload = function (evt) {
        var video = document.getElementById('video1');
        video.src = evt.target.result;
      };
      reader.readAsDataURL(files[0]);
*/

      preview = <video
        id="video1"
        width="96" height="54"
        
        // controls
        // autoplay
        //onload={function() {
        //  windowURL.revokeObjectURL(this.src);
        //}}
        src={windowURL.createObjectURL(files[0])}
        preload="metadata"
        onLoadedMetadata={function(evt) {
          windowURL.revokeObjectURL(evt.target.src);
          var was = 0 === duration;
          duration = evt.target.duration;
          if (was) {
            render(foo());
          }
        }}
        >
        {/*<source
         type={files[0].type}/>*/}
        </video>;
    } else {
      preview = <div>{files[0].type}</div>;
    }
  }

  return <div className={styles.highlight}>
      <Markdown source={markdownInput}/>
      <Markdown source={`**${duration}**`}/>
      {preview}{files[0].size}<input type="file"
      // multiple
      id="files"
      onChange={function (evt) {
        if (files[0].size === 0) {
          files = evt.target.files;
        }
        render(foo());
      }}
    />
    Hello!!
    {duration}
    </div>;
}




const render = getRenderer(container);

render(foo());



/*
var socket = new WebSocket("ws://localhost:8080");
socket.onmessage = function (event) {
  if (event.data === 'reload') {
    location.reload(true);
    console.log('Reloading page....');
  }
}
*/


console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);


// import styles2 from './aa';
// import { c } from './b';
// import { b } from 'bjsx';



