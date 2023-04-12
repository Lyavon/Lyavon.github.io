import Calc from '../primitives.js';
import '../style.js';

Calc.addCssClass(
  'range_container',
  '',
  [
    'bg-white',
    'border',
    'border-light',
    'container-fluid',
    'm-0',
    'overflow-hidden',
    'p-0',
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
    'rounded',
  ],
);
Calc.addCssClass(
  'range_range_column',
  '',
  [
    'col-md-8',
    'p-0',
    'rounded',
  ],
);
Calc.addCssClass(
  'range_indicator_column',
  '',
  [
    'col-md-4',
    'p-0',
    'm-0',
    'rounded',
  ],
);
Calc.addCssClass(
  'range_number_column',
  '',
  [
    'col-sm-4',
    'p-1',
    'rounded',
  ],
);
Calc.addCssClass(
  'range_label_column',
  '',
  [
    'col-sm-8',
    'p-0',
    'fs-3',
    'fw-bold',
    'rounded',
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
