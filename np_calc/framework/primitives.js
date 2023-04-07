export default class Calc {
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
  }
}
