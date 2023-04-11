import Calc from './primitives.js';
import './style.js';

let id = undefined;
let parent = undefined;
let container = Calc.get('#root');

Calc.setMessageHandler((src, msg) => {
  if (!('event' in msg))
    return;
  id = msg.id;
  parent = src;
  Calc.sendMessage(
    parent,
    {
      event: 'resize',
      id: id,
      height: container.offsetHeight,
    },
  );
});
window.addEventListener(
  'resize',
  (e) => {
    if (!parent || !id)
      return;
    Calc.sendMessage(
      parent,
      {
        event: 'resize',
        id: id,
        height: container.offsetHeight,
      },
    );
  },
);
