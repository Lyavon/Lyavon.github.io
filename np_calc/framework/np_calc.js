const get = (id) => document.querySelector(id);

let head = get('head');

let polyfill = document.createElement('script');
polyfill.src = 'https://polyfill.io/v3/polyfill.min.js?features=es6';
head.appendChild(polyfill);

let mathjax = document.createElement('script');
mathjax.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
head.appendChild(mathjax);

let css = document.createElement('link');
css.type = 'text/css';
css.rel = 'stylesheet';
css.href = 'https://lyavon.github.io/np_calc/framework/np_calc.css';
head.appendChild(css);
