import Calc from '../primitives.js';
import '../style.js';

Calc.addCssClass(
  'equation_container',
  {},
  [
    'bg-white',
    'border',
    'border-light',
    'container-fluid',
    'm-0',
    'p-0',
    'rounded',
  ],
);
Calc.addCssClass(
  'equation_row',
  {},
  [
    'm-0',
    'row',
  ],
);
Calc.addCssClass(
  'equation_column',
  {},
  [
    'col-12',
    'p-0',
  ],
);
Calc.addCssClass(
  'equation_content',
  {
    'font-size': '2rem !important;',
  },
  [
    'fs-2',
    'fw-bold',
    'p-2',
    'text-center',
  ],
);
