export default class Calc {
  static cssClasses = {};

  static get(id)
  {
    return document.querySelector(id);
  }

  static getAll(id)
  {
    return document.querySelectorAll(id);
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

  static createIframe(src, params)
  {
    let iframe = document.createElement('iframe');
    iframe.src = src;
    if ('id' in params)
      iframe.id = params.id;
    iframe.width = (params.width || '100%');
    iframe.frameBorder = (params.frameBorder || '0');
    iframe.style = (params.style || 'display:block');
    return iframe;
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
      classList.add(cls);
  }

  static unsetCssClass(element, name)
  {
    let classList = element.classList;
    for (var cls of this.cssClasses[name])
      classList.remove(cls);
    classList.remove(name);
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
