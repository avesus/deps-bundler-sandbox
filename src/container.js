
var container: any = document.getElementById('container');
if (!container) {
  console.log('Appending container!');
  document.body.innerHTML += '<div id="container"></div';
  document.body.innerHTML += '<div ng-app="store"><my-component></my-component></div>';
} else {
  console.log('Container exists');
  container.innerHTML = '';
}

export default container;

