import Calc from "./primitives.js";

Calc.addCss('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
Calc.addScript('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js');

let head = Calc.get('head');

let bootstrap_meta = document.createElement('meta');
bootstrap_meta.name = 'viewport';
bootstrap_meta.content = 'width = device-width, initial-scale = 1';
head.appendChild(bootstrap_meta);

