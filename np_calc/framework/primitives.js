export default class Calc {
  static cssClasses = {};

  static get(id)
  {
    return document.querySelector(id);
  }

  static addCss(url)
  {
    let head = this.get('head');
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = url;
    css.type = 'text/css';
    head.appendChild(css);
  }

  static addScript(url)
  {
    let head = this.get('head');
    let script = document.createElement('script');
    script.src = url;
    head.appendChild(script);
  }

  static addCssClass(name, content = '', inherits = [])
  {
    let head = this.get('head');
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `.${name}{${content}}`;
    head.appendChild(style);
    for (var element of document.getElementsByClassName(name))
      element.classList.add(...inherits);
    this.cssClasses[name] = inherits;
  }

  static setCssClass(element, name)
  {
    let classList = element.classList;
    classList.add(name);
    for (var cls of this.cssClasses[name])
      element.classList.add(cls);
  }

  static setMessageHandler(handler)
  {
    window.addEventListener(
      'message',
      (e) => {
        if (!e.isTrusted) {
          console.error("Got untrusted event: ", e);
          return;
        }
        const message = JSON.parse(e.data);
        handler(e.source, message);
      },
    );
  }

  static sendMessage(destination, message)
  {
    if ((typeof destination) == 'string')
      destination = this.get(destination)
    if ('contentWindow' in destination)
      destination = destination.contentWindow;
    if ((typeof message) != 'string')
      message = JSON.stringify(message);
    destination.postMessage(message, '*');
  }
}
