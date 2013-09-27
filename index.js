module.exports = function (element) {

  var el = document.createElement('div');
  var text = 'innerText' in el ? 'innerText' : 'textContent';

  element.prototype.text = function (value) {
    if (arguments.length === 0) {
      return this.el[text];
    }
    return this.el[text] = value;
  };
  
  return element;
};
