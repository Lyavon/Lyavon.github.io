import Calc from './primitives.js';
import './style.js';

let id = undefined;
let parent = undefined;
let container = Calc.get('#root');

Calc.setMessageHandler((src, msg) => {
  if (!('event' in msg))
    return;
  switch (msg.event) {
  case 'setup':
    parent = src;
    if ('id' in msg)
      id = msg.id;
    Calc.sendMessage(
      parent,
      {
        event: 'resize',
        id: id,
        height: container.offsetHeight,
      },
    );
    break;
  case 'resize':
    let element = Calc.get(`#${msg.id}`);
    if (!element)
      return;
    element.height = msg.height;
    if (parent && id)
      Calc.sendMessage(
        parent,
        {
          event: 'resize',
          id: id,
          height: container.offsetHeight,
        },
      );
    break;
  default:
    break;
  }
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
