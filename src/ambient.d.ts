declare module 'snabbdom-react-jsx' {
  var html:any;
  export { html };
}


declare module 'react' { var exports:any; export default exports; }
declare module 'react-dom' {
  var render:any;
  export { render };
}



declare module 'angular2/core' {
  var Component:any;
  export { Component };
}

declare module 'angular2/platform/browser' {
  var bootstrap: any;
  export { bootstrap };
}


declare module 'most' {
  var exports:any;
  export default exports;
}

declare module 'q' { export var exports:any; }

declare module 'rxjs' {
  var exports:any;
  export default exports;
}

declare module 'lodash' {
  var exports:any;
  export default exports;
}

declare module 'punycode' {
  var exports:any;
  export default exports;
}

declare module 'q' {
  var exports:any;
  export default exports;
}

declare var module: any;
declare var require: any;

declare interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

declare interface Window {
  jQuery: any;
  MSStream: any;
  webkitURL: any;
  Worker: any;
  }

