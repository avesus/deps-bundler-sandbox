const most = require('most');

const o1$ = most.periodic(5000, 1).take(2);//from([1, 2, 3, 4]);
const o2$ = most.periodic(2000, 2).take(10);//from([5, 6, 7, 8]);

// o1$.forEach(console.log.bind(console));

const o3$ = most.combine(function(a, b) {
  console.log(a, b);
  return '' + a + ':' + b;
},
o1$, o2$);

o3$.observe(function(result) {
  console.log(result);
});

