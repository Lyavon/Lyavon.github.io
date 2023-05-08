import Calc from "./primitives.js";

let href = window.location.href;
if (href.startsWith('http://localhost')) {
	Calc.addCss('/np_calc/framework/bootstrap/css/bootstrap.min.css');
	Calc.addScript('/np_calc/framework/mathjax/es5/tex-mml-chtml.js');
} else {
	Calc.addCss('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
	Calc.addScript('https://cdnjs.cloudflare.com/ajax/libs/mathjax/4.0.0-alpha.1/es5/tex-mml-chtml.js');
}

let head = Calc.get('head');

let bootstrap_meta = document.createElement('meta');
bootstrap_meta.name = 'viewport';
bootstrap_meta.content = 'width = device-width, initial-scale = 1';
head.appendChild(bootstrap_meta);

