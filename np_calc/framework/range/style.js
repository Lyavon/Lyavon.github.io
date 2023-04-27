import Calc from '../primitives.js';
import '../style.js';

Calc.addCssClass(
  'range_container',
  {},
  [
    'bg-white',
    'border',
    'border-light',
    'd-flex',
    'flex-column',
    'flex-md-row',
    'align-items-md-center',
    'm-0',
    'overflow-hidden',
    'p-0',
    'rounded',
  ],
);
Calc.addCssClass(
  'range_range_column',
  {},
  [
    'flex-grow-1',
    'flex-shrink-1',
    'p-0',
    'rounded',
  ],
);
Calc.addCssClass(
  'range_indicator_column',
  {},
  [
    'd-flex',
    'justify-content-center',
    'justify-content-md-start',
    'align-items-center',
    'm-0',
    'p-0',
    'rounded',
  ],
);
Calc.addCssClass(
  'range_number_column',
  {},
  [
    'p-1',
    'rounded',
  ],
);
Calc.addCssClass(
  'range_label_column',
  {
    'font-size': '2rem !important;',
  },
  [
    'fw-bold',
    'p-0',
    'rounded',
  ],
);
Calc.addCssClass(
  'range_range',
  {},
  [
  ],
);
Calc.addCssClass(
  'range_number',
  {},
  [
    'form-control',
    'fs-3',
  ],
);
Calc.addStyle(
  'input[type="range"]',
  {
    '-webkit-appearance': 'none',
    'background-color': '#6c757d',
    'border-radius': '5px',
    'height': '7px',
    'width': '100%',
  },
);
const thumbStyle = {
  '-webkit-appearance': 'none',
  'background': '#0d6efd',
  'border-radius': '50%',
  'cursor': 'ew-resize',
  'height': '20px',
  'width': '20px',
};
Calc.addStyle(
  'input[type="range"]::-moz-range-thumb',
  thumbStyle,
);
Calc.addStyle(
  'input[type="range"]::-webkit-slider-thumb',
  thumbStyle,
);
Calc.addStyle(
  'input[type="range"]::-ms-thumb',
  thumbStyle,
);
