const get = (id) => document.querySelector(id);

let head = get('head');

let bootstrap_meta = document.createElement('meta');
bootstrap_meta.name = 'viewport';
bootstrap_meta.content = 'width = device-width, initial-scale = 1';
head.appendChild(bootstrap_meta);

let mathjax = document.createElement('script');
mathjax.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
head.appendChild(mathjax);

let extra_css = document.createElement('link');
extra_css.type = 'text/css';
extra_css.rel = 'stylesheet';
extra_css.href = 'https://lyavon.github.io/np_calc/framework/np_calc.css';
head.appendChild(extra_css);
