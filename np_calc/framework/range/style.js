import Calc from "../primitives.js";

Calc.addCss('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css');
Calc.addScript('https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js');

let head = Calc.get('head');

let bootstrap_meta = document.createElement('meta');
bootstrap_meta.name = 'viewport';
bootstrap_meta.content = 'width = device-width, initial-scale = 1';
head.appendChild(bootstrap_meta);

Calc.addCssClass(
  'range_container',
  '',
  [
    'container-fluid',
    'm-1',
    'p-0',
    'border',
    'border-light',
    'bg-white',
    'rounded',
  ],
);
Calc.addCssClass(
  'range_row',
  '',
  [
    'row',
    'm-0',
    'align-items-center',
  ],
);
Calc.addCssClass(
  'range_range_column',
  '',
  [
    'col-md-8',
    'p-0',
  ],
);
Calc.addCssClass(
  'range_indicator_column',
  '',
  [
    'col-md-4',
    'p-0',
    'm-0',
  ],
);
Calc.addCssClass(
  'range_number_column',
  '',
  [
    'col-sm-6',
    'p-1',
  ],
);
Calc.addCssClass(
  'range_label_column',
  '',
  [
    'col-sm-6',
    'p-0',
    'fs-3',
    'fw-bold',
  ],
);
Calc.addCssClass(
  'range_range',
  '',
  [
    'form-range',
  ],
);
Calc.addCssClass(
  'range_number',
  '',
  [
    'form-control',
    'fs-3',
  ],
);

export {Calc};
