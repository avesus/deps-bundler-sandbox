define("ma", ["require", "exports", 'react', './node_modules/angular2/core', './node_modules/angular2/platform/browser', 'reflect-metadata'], function (require, exports, react_1, core_1, browser_1) {
    "use strict";
    var container = document.getElementById('container');
    if (!container) {
        console.log('Appending container!');
        document.body.innerHTML += '<div id="container"></div';
    }
    else {
        container.innerHTML = '';
    }
    container = document.getElementById('container');
    // console.log(container);
    if (module.hot) {
        console.log('this module is hot!'); //, module.hot);
        module.hot.accept();
    }
    exports.MyComponent = core_1.Component({
        selector: 'my-component',
        template: '<div>Hello my name is {{name}}. <button (click)="sayMyName()">Say my name</button></div>'
    })
        .Class({
        constructor: function () {
            this.name = 'Max';
        },
        sayMyName: function () {
            console.log('My name is', this.name);
        }
    });
    browser_1.bootstrap(exports.MyComponent);
    var assign = require('object.assign/polyfill')();
    Object.assign = assign;
    var csjs = require('csjs');
    var green = '#33aa22';
    //const styles = {highlight: {}, panel: {}};
    var error = '';
    var styles = (_a = ["\n\n  @-webkit-keyframes yellow-fade {   \n     0% {background: yellow;}\n     100% {background: none;}\n  }\n\n  @keyframes yellow-fade {\n     0% {background: yellow;}\n     100% {background: none;}\n  }\n\n  .highlight {\n     -webkit-animation: yellow-fade 2s ease-in 1;\n     animation: yellow-fade 2s ease-in 1;\n  }\n\n  .panel {\n    border: 1px solid black;\n    background-color: ", ";\n  }\n  .title {\n    padding: 4px;\n    font-size: 15px;\n  }\n\n"], _a.raw = ["\n\n  @-webkit-keyframes yellow-fade {   \n     0% {background: yellow;}\n     100% {background: none;}\n  }\n\n  @keyframes yellow-fade {\n     0% {background: yellow;}\n     100% {background: none;}\n  }\n\n  .highlight {\n     -webkit-animation: yellow-fade 2s ease-in 1;\n     animation: yellow-fade 2s ease-in 1;\n  }\n\n  .panel {\n    border: 1px solid black;\n    background-color: ", ";\n  }\n  .title {\n    padding: 4px;\n    font-size: 15px;\n  }\n\n"], csjs(_a, green));
    var css = csjs.getCss(styles);
    var insertCss = require('insert-css');
    insertCss(css);
    //var sheet = window.document.styleSheets[0];
    //sheet.insertRule(css, sheet.cssRules.length);
    //console.log(css);
    /*
    var styles = cssInJS({
      button: {
        padding: 5,
        backgroundColor: 'white'
      }
    });
    */
    var timing = '';
    if (window.performance) {
        var pageLoadTiming = {};
        for (var k in window.performance.timing) {
            if (k !== 'toJSON') {
                pageLoadTiming[k] = window.performance.timing[k];
            }
        }
        pageLoadTiming.code = (new Date()).valueOf();
        timing = JSON.stringify(pageLoadTiming, null, 2);
    }
    function iOS8Minus() {
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            return window.performance ? false : true;
        }
        return false;
    }
    var iOSBugfix = iOS8Minus();
    function foo_(files1, files2, This) {
        var size = 0;
        if (false && files1) {
            try {
                var file_blob = files1[0];
                size = 1111;
                var newFile1 = file_blob.slice(0, 10);
                var blob = new Blob([file_blob, "blobText"], { type: "text/plain" });
                // size = file_blob.size;
                size = newFile1.size;
            }
            catch (err) {
                socket.send(err.message);
            }
        }
        return (<div className={styles.highlight}>
    {error}
    <pre style={{ fontSize: '10px' }}>{timing}</pre>

    {files2 && <h1>Files 2 {files2[0].size}</h1>}

    {files1 && <h1>Files 1 {files1[0].size}</h1>}

    {window.Worker && <h1>Hello here!</h1>}
    <a className={styles.panel} href="#" id="fileSelect" onclick={function (e) {
            var fileElem = document.getElementById("files");
            fileElem.click();
            e.preventDefault();
        }}>Select some files</a>
    {iOSBugfix &&
            (<div>
     <input type="file" accept="image/*" multiple id="files" style={{ display: 'none' }} onchange={function () {
                g_view = patch(g_view, foo(this.files, files2));
            }}/>
    <input type="file" accept="image/*" onchange={function () {
                // console.log(this.files);
                g_view = patch(g_view, foo(files1, this.files));
            }}/><br />
    <input type="file" accept="video/*" onchange={function () {
                // console.log(this.files);
                g_view = patch(g_view, foo(files1, this.files));
            }}/><br /></div>) ||
            (<input type="file" multiple id="files" style={{ display: 'none' }} onchange={function () {
                g_view = patch(g_view, foo(this.files, files2));
            }}/>)}

    <br />
    Reloading works<br />
    <input type="file" onchange={function () {
            // console.log(this.files);
            g_view = patch(g_view, foo(files1, this.files));
        }}/><br />
    

  </div>);
    }
    var files = [{ size: 0 }];
    var windowURL = window.URL || window.webkitURL;
    var createObjectURL = windowURL.createObjectURL;
    createObjectURL = createObjectURL.bind(windowURL);
    var duration = 0;
    function foo() {
        var preview = <div></div>;
        if (files[0].size) {
            // TODO: preview images for most formats
            var imageType = /^image\//;
            var videoType = /^video\//;
            if (imageType.test(files[0].type)) {
                preview = <div><img src={createObjectURL(files[0])} height="60" onload={function () {
                    window.URL.revokeObjectURL(this.src);
                }}/>
        </div>;
            }
            else if (videoType.test(files[0].type)) {
                /*      var reader = new window.FileReader();
                      reader.onload = function (evt) {
                        var video = document.getElementById('video1');
                        video.src = evt.target.result;
                      };
                      reader.readAsDataURL(files[0]);
                */
                preview = <video id="video1" width="96" height="54" src={windowURL.createObjectURL(files[0])} preload="metadata" onloadedmetadata={function () {
                    windowURL.revokeObjectURL(this.src);
                    var was = 0 === duration;
                    duration = this.duration;
                    if (was) {
                        g_view = patch(g_view, foo());
                    }
                }}>
        
        </video>;
            }
            else {
                preview = <div>{files[0].type}</div>;
            }
        }
        return <div className={styles.highlight}>{preview}{files[0].size}<input type="file" id="files" onchange={function () {
            if (files[0].size === 0) {
                files = this.files;
            }
            g_view = patch(g_view, foo());
        }}/>
    Hello!!
    {duration}
    </div>;
    }
    var snabbdom = require('snabbdom');
    var patch = snabbdom.init([
        require('snabbdom/modules/class'),
        require('snabbdom/modules/props'),
        require('snabbdom/modules/style'),
        require('snabbdom/modules/eventlisteners'),
    ]);
    // Patch into empty DOM element - this modifies the DOM as a side effect
    var g_view = patch(container, foo());
    var _a;
});
/*
var socket = new WebSocket("ws://localhost:8080");
socket.onmessage = function (event) {
  if (event.data === 'reload') {
    location.reload(true);
    console.log('Reloading page....');
  }
}
*/
/*
console.log('qqq');
console.log('bbb');

console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);

import styles2 from './aa';
// import { c } from './b';
//import { b } from 'bjsx';



console.log('Hi here!!!');

// a();
*/
//# sourceMappingURL=ma_ts.js.map