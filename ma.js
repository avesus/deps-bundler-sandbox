"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
var container = require('./container');
container = document.getElementById('container');
function getRenderer(container) {
    var prevNode = container;
    function render(vNode) {
        ReactDOM.render(vNode, container);
    }
    return render;
}
if (module.hot) {
    console.log('this module is hot!');
    module.hot.accept('./ma.js', function (prevThis) {
        console.log(prevThis);
    });
}
var bb = require('./bb');
var csjs = require('csjs');
var classNames = require('classnames');
var buttonType = 'primary';
console.log(classNames((_a = {}, _a["btn-" + buttonType] = true, _a)));
var error = '';
var assign = require('object.assign/polyfill')();
Object.assign = assign;
var jsonLoaded = require('./abcd.json');
var Markdown = require('react-markdown');
var markdownInput = '# This is a header\n\nAnd this is a paragraph';
var green = '#33aa22';
var styles = (_b = ["\n\n  /* ", " */\n\n  @-webkit-keyframes yellow-fade {   \n     0% {background: yellow;}\n     100% {background: none;}\n  }\n\n  @keyframes yellow-fade {\n     0% {background: yellow;}\n     100% {background: none;}\n  }\n\n  .highlight {\n     -webkit-animation: yellow-fade 2s ease-in 1;\n     animation: yellow-fade 2s ease-in 1;\n  }\n\n  .panel {\n    border: 1px solid black;\n    background-color: ", ";\n  }\n  .title {\n    padding: 4px;\n    font-size: 15px;\n  }\n\n"], _b.raw = ["\n\n  /* ", " */\n\n  @-webkit-keyframes yellow-fade {   \n     0% {background: yellow;}\n     100% {background: none;}\n  }\n\n  @keyframes yellow-fade {\n     0% {background: yellow;}\n     100% {background: none;}\n  }\n\n  .highlight {\n     -webkit-animation: yellow-fade 2s ease-in 1;\n     animation: yellow-fade 2s ease-in 1;\n  }\n\n  .panel {\n    border: 1px solid black;\n    background-color: ", ";\n  }\n  .title {\n    padding: 4px;\n    font-size: 15px;\n  }\n\n"], csjs(_b, __filename, green));
var css = csjs.getCss(styles);
var insertCss = require('insert-css');
insertCss(css + '\n' + '//# \u0073ourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VSb290IjoiaHR0cDovL2V4YW1wbGUuY29tL2FwcC9qcy8ifQ==');
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
function foo_(files1, files2) {
    var size = 0;
    return (React.createElement("div", {className: styles.highlight}, 
        error, 
        React.createElement("pre", {style: { fontSize: '10px' }}, timing), 
        files2 && React.createElement("h1", null, 
            "Files 2 ", 
            files2[0].size), 
        files1 && React.createElement("h1", null, 
            "Files 1 ", 
            files1[0].size), 
        window.Worker && React.createElement("h1", null, "Hello here!"), 
        React.createElement("a", {className: styles.panel, href: "#", id: "fileSelect", onclick: function (e) {
            var fileElem = document.getElementById("files");
            if (fileElem) {
                fileElem.click();
            }
            e.preventDefault();
        }}, "Select some files"), 
        iOSBugfix &&
            (React.createElement("div", null, 
                React.createElement("input", {type: "file", accept: "image/*", multiple: true, id: "files", style: { display: 'none' }, onChange: function () {
                    render(foo_(this.files, files2));
                }}), 
                React.createElement("input", {type: "file", accept: "image/*", onChange: function () {
                    render(foo_(files1, this.files));
                }}), 
                React.createElement("br", null), 
                React.createElement("input", {type: "file", accept: "video/*", onChange: function () {
                    render(foo_(files1, this.files));
                }}), 
                React.createElement("br", null))) ||
            (React.createElement("input", {type: "file", multiple: true, id: "files", style: { display: 'none' }, onChange: function () {
                render(foo_(this.files, files2));
            }})), 
        React.createElement("br", null), 
        "Reloading works", 
        React.createElement("br", null), 
        React.createElement("input", {type: "file", onChange: function () {
            render(foo_(files1, this.files));
        }}), 
        React.createElement("br", null)));
}
var files = [{ size: 0 }];
var windowURL = window.URL || window.webkitURL;
var duration = 0;
function foo() {
    var preview = React.createElement("div", null);
    if (files[0].size) {
        var imageType = /^image\//;
        var videoType = /^video\//;
        if (imageType.test(files[0].type)) {
            preview = React.createElement("div", null, 
                React.createElement("img", {src: windowURL.createObjectURL(files[0]), height: "60", onload: function () {
                    window.URL.revokeObjectURL(this.src);
                }})
            );
        }
        else if (videoType.test(files[0].type)) {
            preview = React.createElement("video", {id: "video1", width: "96", height: "54", src: windowURL.createObjectURL(files[0]), preload: "metadata", onLoadedMetadata: function (evt) {
                windowURL.revokeObjectURL(evt.target.src);
                var was = 0 === duration;
                duration = evt.target.duration;
                if (was) {
                    render(foo());
                }
            }});
        }
        else {
            preview = React.createElement("div", null, files[0].type);
        }
    }
    return React.createElement("div", {className: styles.highlight}, 
        React.createElement(Markdown, {source: markdownInput}), 
        React.createElement(Markdown, {source: "**" + duration + "**"}), 
        preview, 
        files[0].size, 
        React.createElement("input", {type: "file", id: "files", onChange: function (evt) {
            if (files[0].size === 0) {
                files = evt.target.files;
            }
            render(foo());
        }}), 
        "Hello!!", 
        duration);
}
var render = getRenderer(container);
render(foo());
console.log('main starting');
var a = require('./a.js');
var b = require('./b.js');
console.log('in main, a.done=%j, b.done=%j', a.done, b.done);
var _a, _b;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcmMvbWEudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUF3QkEsSUFBWSxLQUFLLFdBQU0sT0FBTyxDQUFDLENBQUE7QUFDL0IsSUFBWSxRQUFRLFdBQU0sV0FBVyxDQUFDLENBQUE7QUFHdEMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZDLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBRWpELHFCQUFzQixTQUFTO0lBQzdCLElBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUN6QixnQkFBaUIsS0FBSztRQUtwQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBSUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFZixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVUsUUFBUTtRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUdELElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQThCM0IsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzdCLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN6QyxJQUFJLFVBQVUsR0FBRyxTQUFTLENBQUM7QUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBRSxHQUFDLFNBQU8sVUFBWSxDQUFDLEdBQUUsSUFBSSxLQUFFLENBQUMsQ0FB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bEMsb0JBQUMsUUFBUSxHQUFDLE1BQU0sRUFBRSxPQUFLLFFBQVEsT0FBSyxFQUFFO1FBQ3JDLE9BQVE7UUFBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSztRQUFBLHFCQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUUxQyxFQUFFLEVBQUMsT0FBTyxFQUNWLFFBQVEsRUFBRSxVQUFVLEdBQUc7WUFDckIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLENBQUUsRUFDRjtRQUNGLFNBQ0E7UUFBQyxRQUFTLENBQ0osQ0FBQztBQUNYLENBQUM7QUFLRCxJQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFdEMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFlZCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzdCLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QixJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGh0bWwgKi9cblxuLy8gVHlwZVNjcmlwdCBzdXBwb3J0XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiYW1iaWVudC5kLnRzXCIvPlxuXG4vLyBTbmFiYmRvbSBzdXBwb3J0XG5cbi8qXG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnc25hYmJkb20tcmVhY3QtanN4JztcbmNvbnN0IFJlYWN0ID0ge1xuICBjcmVhdGVFbGVtZW50OiBodG1sXG59O1xuXG52YXIgc25hYmJkb20gPSByZXF1aXJlKCdzbmFiYmRvbScpO1xudmFyIHBhdGNoID0gc25hYmJkb20uaW5pdChbIC8vIEluaXQgcGF0Y2ggZnVuY3Rpb24gd2l0aCBjaG9vc2VuIG1vZHVsZXNcbiAgLy8gcmVxdWlyZSgnc25hYmJkb20vbW9kdWxlcy9jbGFzcycpLCAvLyBtYWtlcyBpdCBlYXN5IHRvIHRvZ2dsZSBjbGFzc2VzXG4gIHJlcXVpcmUoJ3NuYWJiZG9tL21vZHVsZXMvcHJvcHMnKSwgLy8gZm9yIHNldHRpbmcgcHJvcGVydGllcyBvbiBET00gZWxlbWVudHNcbiAgcmVxdWlyZSgnc25hYmJkb20vbW9kdWxlcy9zdHlsZScpLCAvLyBoYW5kbGVzIHN0eWxpbmcgb24gZWxlbWVudHMgd2l0aCBzdXBwb3J0IGZvciBhbmltYXRpb25zXG4gIHJlcXVpcmUoJ3NuYWJiZG9tL21vZHVsZXMvZXZlbnRsaXN0ZW5lcnMnKSwgLy8gYXR0YWNoZXMgZXZlbnQgbGlzdGVuZXJzXG5dKTtcbiovXG5cblxuLy8gUmVhY3Qgc3VwcG9ydFxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuXG52YXIgY29udGFpbmVyID0gcmVxdWlyZSgnLi9jb250YWluZXInKTtcbmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcblxuZnVuY3Rpb24gZ2V0UmVuZGVyZXIgKGNvbnRhaW5lcikge1xuICB2YXIgcHJldk5vZGUgPSBjb250YWluZXI7XG4gIGZ1bmN0aW9uIHJlbmRlciAodk5vZGUpIHtcbiAgICAvLyBTbmFiYmRvbVxuICAgIC8vcHJldk5vZGUgPSBwYXRjaChwcmV2Tm9kZSwgdk5vZGUpO1xuXG4gICAgLy8gUmVhY3RcbiAgICBSZWFjdERPTS5yZW5kZXIodk5vZGUsIGNvbnRhaW5lcik7XG4gIH1cblxuICByZXR1cm4gcmVuZGVyO1xufVxuXG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgXG4gIGNvbnNvbGUubG9nKCd0aGlzIG1vZHVsZSBpcyBob3QhJyk7Ly8sIG1vZHVsZS5ob3QpO1xuICBtb2R1bGUuaG90LmFjY2VwdCgnLi9tYS5qcycsIGZ1bmN0aW9uIChwcmV2VGhpcykge1xuICAgIGNvbnNvbGUubG9nKHByZXZUaGlzKTtcbiAgfSk7XG59XG5cblxuY29uc3QgYmIgPSByZXF1aXJlKCcuL2JiJyk7XG5cblxuXG5cbi8qXG5pbXBvcnQgbW9zdCBmcm9tICdtb3N0JztcbmltcG9ydCBxIGZyb20gJ3EnO1xuaW1wb3J0IHJ4IGZyb20gJ3J4anMnO1xuaW1wb3J0IGxvZGFzaCBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHB1bnljb2RlIGZyb20gJ3B1bnljb2RlJztcblxuXG5pbXBvcnQgJ3pvbmUuanMnO1xuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuXG5yZXF1aXJlKFwiYW5ndWxhcjIvY29tbW9uXCIpO1xucmVxdWlyZShcImFuZ3VsYXIyL2NvbXBpbGVyXCIpO1xucmVxdWlyZShcImFuZ3VsYXIyL2h0dHBcIik7XG5yZXF1aXJlKFwiYW5ndWxhcjIvcm91dGVyXCIpO1xucmVxdWlyZShcImFuZ3VsYXIyL3VwZ3JhZGVcIik7XG4vLyByZXF1aXJlKFwiY29yZS1qc1wiKTtcblxucmVxdWlyZShcImFuZ3VsYXIyLWluLW1lbW9yeS13ZWItYXBpXCIpO1xud2luZG93LmpRdWVyeSA9IHJlcXVpcmUoXCJqcXVlcnlcIik7XG5yZXF1aXJlKFwiYm9vdHN0cmFwXCIpO1xuKi9cblxuXG5jb25zdCBjc2pzID0gcmVxdWlyZSgnY3NqcycpO1xuY29uc3QgY2xhc3NOYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcbmxldCBidXR0b25UeXBlID0gJ3ByaW1hcnknO1xuY29uc29sZS5sb2coY2xhc3NOYW1lcyh7IFtgYnRuLSR7YnV0dG9uVHlwZX1gXTogdHJ1ZSB9KSk7XG5cbi8qXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuZXhwb3J0IGNvbnN0IE15Q29tcG9uZW50ID0gQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1jb21wb25lbnQnLFxuICB0ZW1wbGF0ZTogJzxkaXY+SGVsbG8gbXkgbmFtZSBpcyB7e25hbWV9fS4gPGJ1dHRvbiBjbGFzcz1cIicgKyBjbGFzc05hbWVzKHtidG46IHRydWUsIFtgYnRuLSR7YnV0dG9uVHlwZX1gXTogdHJ1ZX0pICsgJ1wiKGNsaWNrKT1cInNheU15TmFtZSgpXCI+U2F5IG15IG5hbWU8L2J1dHRvbj48L2Rpdj4nXG59KVxuLkNsYXNzKHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gJ01heCdcbiAgfSxcbiAgc2F5TXlOYW1lKCkge1xuICAgIGNvbnNvbGUubG9nKCdNeSBuYW1lIGlzJywgdGhpcy5uYW1lKVxuICB9XG59KTtcblxuaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5cbmJvb3RzdHJhcChNeUNvbXBvbmVudCk7XG4qL1xuXG5cbnZhciBlcnJvcjogc3RyaW5nID0gJyc7XG5cbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QuYXNzaWduL3BvbHlmaWxsJykoKTtcbk9iamVjdC5hc3NpZ24gPSBhc3NpZ247XG5cbmNvbnN0IGpzb25Mb2FkZWQgPSByZXF1aXJlKCcuL2FiY2QuanNvbicpO1xuXG5jb25zdCBNYXJrZG93biA9IHJlcXVpcmUoJ3JlYWN0LW1hcmtkb3duJyk7XG5cbmxldCBtYXJrZG93bklucHV0ID0gJyMgVGhpcyBpcyBhIGhlYWRlclxcblxcbkFuZCB0aGlzIGlzIGEgcGFyYWdyYXBoJztcblxuXG5cbmNvbnN0IGdyZWVuOiBzdHJpbmcgPSAnIzMzYWEyMic7XG5cblxuXG5jb25zdCBzdHlsZXMgPSBjc2pzYFxuXG4gIC8qICR7X19maWxlbmFtZX0gKi9cblxuICBALXdlYmtpdC1rZXlmcmFtZXMgeWVsbG93LWZhZGUgeyAgIFxuICAgICAwJSB7YmFja2dyb3VuZDogeWVsbG93O31cbiAgICAgMTAwJSB7YmFja2dyb3VuZDogbm9uZTt9XG4gIH1cblxuICBAa2V5ZnJhbWVzIHllbGxvdy1mYWRlIHtcbiAgICAgMCUge2JhY2tncm91bmQ6IHllbGxvdzt9XG4gICAgIDEwMCUge2JhY2tncm91bmQ6IG5vbmU7fVxuICB9XG5cbiAgLmhpZ2hsaWdodCB7XG4gICAgIC13ZWJraXQtYW5pbWF0aW9uOiB5ZWxsb3ctZmFkZSAycyBlYXNlLWluIDE7XG4gICAgIGFuaW1hdGlvbjogeWVsbG93LWZhZGUgMnMgZWFzZS1pbiAxO1xuICB9XG5cbiAgLnBhbmVsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2dyZWVufTtcbiAgfVxuICAudGl0bGUge1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cblxuYDtcblxuY29uc3QgY3NzID0gY3Nqcy5nZXRDc3Moc3R5bGVzKTtcbnZhciBpbnNlcnRDc3MgPSByZXF1aXJlKCdpbnNlcnQtY3NzJyk7XG5pbnNlcnRDc3MoY3NzICsgJ1xcbicgKyAnLy8jIFxcdTAwNzNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKelkzSnBjSFF1YW5NaUxDSnpiM1Z5WTJWU2IyOTBJam9pYUhSMGNEb3ZMMlY0WVcxd2JHVXVZMjl0TDJGd2NDOXFjeThpZlE9PScpO1xuXG5cbnZhciB0aW1pbmc6IHN0cmluZyA9ICcnO1xuaWYgKHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICB2YXIgcGFnZUxvYWRUaW1pbmc6IHtcbiAgICAgIGNvZGU/OiBudW1iZXI7XG4gICAgfSA9IHt9O1xuICBmb3IodmFyIGsgaW4gd2luZG93LnBlcmZvcm1hbmNlLnRpbWluZykge1xuICAgIGlmIChrICE9PSAndG9KU09OJykge1xuICAgICAgcGFnZUxvYWRUaW1pbmdba10gPSB3aW5kb3cucGVyZm9ybWFuY2UudGltaW5nW2tdO1xuICAgIH1cbiAgfVxuXG4gIHBhZ2VMb2FkVGltaW5nLmNvZGUgPSAobmV3IERhdGUoKSkudmFsdWVPZigpO1xuICB0aW1pbmcgPSBKU09OLnN0cmluZ2lmeShwYWdlTG9hZFRpbWluZywgbnVsbCwgMik7XG59XG5cblxuZnVuY3Rpb24gaU9TOE1pbnVzICgpOiBib29sZWFuIHtcbiAgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0pIHtcbiAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlID8gZmFsc2UgOiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgaU9TQnVnZml4ID0gaU9TOE1pbnVzKCk7XG5cblxuXG5cbmZ1bmN0aW9uIGZvb18oZmlsZXMxLCBmaWxlczIpIHtcblxuICB2YXIgc2l6ZSA9IDA7XG4gIC8qXG4gIGlmIChmYWxzZSAmJiBmaWxlczEpIHtcbiAgICB0cnkge1xuICAgIHZhciBmaWxlX2Jsb2IgPSBmaWxlczFbMF07XG4gICAgc2l6ZSA9IDExMTE7XG4gICAgdmFyIG5ld0ZpbGUxID0gZmlsZV9ibG9iLnNsaWNlKDAsIDEwKTtcblxuICAgIHZhciBibG9iID0gbmV3IEJsb2IoW2ZpbGVfYmxvYiwgXCJibG9iVGV4dFwiXSwge3R5cGU6IFwidGV4dC9wbGFpblwifSk7XG4gICAgLy8gc2l6ZSA9IGZpbGVfYmxvYi5zaXplO1xuICAgIHNpemUgPSBuZXdGaWxlMS5zaXplO1xuICAgIC8vIHNpemUgPSBibG9iLnNpemU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzb2NrZXQuc2VuZChlcnIubWVzc2FnZSk7XG4gICAgICAvL2NvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG4gICovXG5cbiAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhpZ2hsaWdodH0+XG4gICAge2Vycm9yfVxuICAgIDxwcmUgc3R5bGU9e3tmb250U2l6ZTogJzEwcHgnfX0+e3RpbWluZ308L3ByZT5cblxuICAgIHsgZmlsZXMyICYmIDxoMT5GaWxlcyAyIHtmaWxlczJbMF0uc2l6ZX08L2gxPiB9XG5cbiAgICB7IGZpbGVzMSAmJiA8aDE+RmlsZXMgMSB7ZmlsZXMxWzBdLnNpemV9PC9oMT4gfVxuXG4gICAge3dpbmRvdy5Xb3JrZXIgJiYgPGgxPkhlbGxvIGhlcmUhPC9oMT4gfVxuICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnBhbmVsfSBocmVmPVwiI1wiIGlkPVwiZmlsZVNlbGVjdFwiXG4gICAgb25jbGljaz17XG5cbiAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBmaWxlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZXNcIik7XG4gICAgICAgIGlmIChmaWxlRWxlbSkge1xuICAgICAgICAgIGZpbGVFbGVtLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgICA+U2VsZWN0IHNvbWUgZmlsZXM8L2E+XG4gICAgeyBpT1NCdWdmaXggJiZcbiAgICAgICAoXG4gICAgICAgPGRpdj5cbiAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCJcbiAgICAgIC8vIFNlbGVjdCBsaXN0IG9mIHBob3Rvc1xuICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICBtdWx0aXBsZVxuICAgICAgaWQ9XCJmaWxlc1wiXG4gICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XG4gICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKCkge1xuICAgICAgICByZW5kZXIoZm9vXyh0aGlzLmZpbGVzLCBmaWxlczIpKTtcbiAgICAgIH19XG4gICAgLz5cbiAgICA8aW5wdXQgdHlwZT1cImZpbGVcIlxuICAgICAvLyBUYWtlIGEgcGhvdG9cbiAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbiAgICAgIHJlbmRlcihmb29fKGZpbGVzMSwgdGhpcy5maWxlcykpO1xuICAgIH19Lz48YnIvPlxuICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiXG4gICAgIC8vIFRha2Ugb3Igc2VsZWN0IGEgdmlkZW9cbiAgICAgYWNjZXB0PVwidmlkZW8vKlwiXG4gICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbiAgICAgIHJlbmRlcihmb29fKGZpbGVzMSwgdGhpcy5maWxlcykpO1xuICAgIH19Lz48YnIvPjwvZGl2PlxuXG4gICAgKSB8fFxuXG4gICAgKDxpbnB1dCB0eXBlPVwiZmlsZVwiXG4gICAgICBtdWx0aXBsZVxuICAgICAgaWQ9XCJmaWxlc1wiXG4gICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XG4gICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKCkge1xuICAgICAgcmVuZGVyKGZvb18odGhpcy5maWxlcywgZmlsZXMyKSk7XG4gICAgfX1cbiAgICAvPikgfVxuXG4gICAgPGJyLz5cbiAgICBSZWxvYWRpbmcgd29ya3M8YnIvPlxuICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiXG4gICAgIC8vIFRha2UgcGhvdG8gb3IgdmlkZW8gb3IgY2hvc2Ugb25lIHNpbmdsZSBmaWxlLlxuICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgICByZW5kZXIoZm9vXyhmaWxlczEsIHRoaXMuZmlsZXMpKTtcbiAgICB9fS8+PGJyLz5cbiAgICBcblxuICA8L2Rpdj4pO1xufVxuXG5cblxuXG52YXIgZmlsZXM6IEZpbGVbXSA9IFt7IHNpemU6IDAgfSBhcyBGaWxlXTtcblxudmFyIHdpbmRvd1VSTCA9IHdpbmRvdy5VUkwgfHwgd2luZG93LndlYmtpdFVSTDtcblxudmFyIGR1cmF0aW9uID0gMDtcblxuZnVuY3Rpb24gZm9vICgpIHtcbiAgdmFyIHByZXZpZXcgPSA8ZGl2PjwvZGl2PjtcbiAgaWYgKGZpbGVzWzBdLnNpemUpIHtcbiAgICAvLyBUT0RPOiBwcmV2aWV3IGltYWdlcyBmb3IgbW9zdCBmb3JtYXRzXG4gICAgY29uc3QgaW1hZ2VUeXBlID0gL15pbWFnZVxcLy87XG4gICAgY29uc3QgdmlkZW9UeXBlID0gL152aWRlb1xcLy87XG4gICAgXG4gICAgaWYgKGltYWdlVHlwZS50ZXN0KGZpbGVzWzBdLnR5cGUpKSB7XG4gICAgICBwcmV2aWV3ID0gPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e3dpbmRvd1VSTC5jcmVhdGVPYmplY3RVUkwoZmlsZXNbMF0pfVxuICAgICAgICBoZWlnaHQ9XCI2MFwiXG4gICAgICAgIG9ubG9hZD17ZnVuY3Rpb24oKSB7XG4gICAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5zcmMpO1xuICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8L2Rpdj47XG4gICAgfSBlbHNlIGlmICh2aWRlb1R5cGUudGVzdChmaWxlc1swXS50eXBlKSkge1xuLyogICAgICB2YXIgcmVhZGVyID0gbmV3IHdpbmRvdy5GaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgdmlkZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlkZW8xJyk7XG4gICAgICAgIHZpZGVvLnNyYyA9IGV2dC50YXJnZXQucmVzdWx0O1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVzWzBdKTtcbiovXG5cbiAgICAgIHByZXZpZXcgPSA8dmlkZW9cbiAgICAgICAgaWQ9XCJ2aWRlbzFcIlxuICAgICAgICB3aWR0aD1cIjk2XCIgaGVpZ2h0PVwiNTRcIlxuICAgICAgICBcbiAgICAgICAgLy8gY29udHJvbHNcbiAgICAgICAgLy8gYXV0b3BsYXlcbiAgICAgICAgLy9vbmxvYWQ9e2Z1bmN0aW9uKCkge1xuICAgICAgICAvLyAgd2luZG93VVJMLnJldm9rZU9iamVjdFVSTCh0aGlzLnNyYyk7XG4gICAgICAgIC8vfX1cbiAgICAgICAgc3JjPXt3aW5kb3dVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGVzWzBdKX1cbiAgICAgICAgcHJlbG9hZD1cIm1ldGFkYXRhXCJcbiAgICAgICAgb25Mb2FkZWRNZXRhZGF0YT17ZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgICAgd2luZG93VVJMLnJldm9rZU9iamVjdFVSTChldnQudGFyZ2V0LnNyYyk7XG4gICAgICAgICAgdmFyIHdhcyA9IDAgPT09IGR1cmF0aW9uO1xuICAgICAgICAgIGR1cmF0aW9uID0gZXZ0LnRhcmdldC5kdXJhdGlvbjtcbiAgICAgICAgICBpZiAod2FzKSB7XG4gICAgICAgICAgICByZW5kZXIoZm9vKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICB7Lyo8c291cmNlXG4gICAgICAgICB0eXBlPXtmaWxlc1swXS50eXBlfS8+Ki99XG4gICAgICAgIDwvdmlkZW8+O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2aWV3ID0gPGRpdj57ZmlsZXNbMF0udHlwZX08L2Rpdj47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGlnaGxpZ2h0fT5cbiAgICAgIDxNYXJrZG93biBzb3VyY2U9e21hcmtkb3duSW5wdXR9Lz5cbiAgICAgIDxNYXJrZG93biBzb3VyY2U9e2AqKiR7ZHVyYXRpb259KipgfS8+XG4gICAgICB7cHJldmlld317ZmlsZXNbMF0uc2l6ZX08aW5wdXQgdHlwZT1cImZpbGVcIlxuICAgICAgLy8gbXVsdGlwbGVcbiAgICAgIGlkPVwiZmlsZXNcIlxuICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIChldnQpIHtcbiAgICAgICAgaWYgKGZpbGVzWzBdLnNpemUgPT09IDApIHtcbiAgICAgICAgICBmaWxlcyA9IGV2dC50YXJnZXQuZmlsZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyKGZvbygpKTtcbiAgICAgIH19XG4gICAgLz5cbiAgICBIZWxsbyEhXG4gICAge2R1cmF0aW9ufVxuICAgIDwvZGl2Pjtcbn1cblxuXG5cblxuY29uc3QgcmVuZGVyID0gZ2V0UmVuZGVyZXIoY29udGFpbmVyKTtcblxucmVuZGVyKGZvbygpKTtcblxuXG5cbi8qXG52YXIgc29ja2V0ID0gbmV3IFdlYlNvY2tldChcIndzOi8vbG9jYWxob3N0OjgwODBcIik7XG5zb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChldmVudC5kYXRhID09PSAncmVsb2FkJykge1xuICAgIGxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICBjb25zb2xlLmxvZygnUmVsb2FkaW5nIHBhZ2UuLi4uJyk7XG4gIH1cbn1cbiovXG5cblxuY29uc29sZS5sb2coJ21haW4gc3RhcnRpbmcnKTtcbmNvbnN0IGEgPSByZXF1aXJlKCcuL2EuanMnKTtcbmNvbnN0IGIgPSByZXF1aXJlKCcuL2IuanMnKTtcbmNvbnNvbGUubG9nKCdpbiBtYWluLCBhLmRvbmU9JWosIGIuZG9uZT0laicsIGEuZG9uZSwgYi5kb25lKTtcblxuXG4vLyBpbXBvcnQgc3R5bGVzMiBmcm9tICcuL2FhJztcbi8vIGltcG9ydCB7IGMgfSBmcm9tICcuL2InO1xuLy8gaW1wb3J0IHsgYiB9IGZyb20gJ2Jqc3gnO1xuXG5cblxuIl19