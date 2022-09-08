const { colors, styles } = require("./fashionStyles.js");

class fashion {
  constructor() {
    this.str = [];
    const ref = Object.assign({}, colors, styles);
    const all = Object.keys(ref);
    all.forEach(d => {
      const obj = {
        [d]: {
          get() {
            this.str.push(ref[[d]]);
            const self = this;
            const b = function(arg) {
              const reset = "\x1b[" + styles.reset[0] + "m";
              for (var d of self.str.reverse())
                arg = "\x1b[" + d[0] + "m" + arg + "\x1b[" + d[1] + "m";
              self.str = [];
              return arg + reset;
            };
            b.__proto__ = this;
            return b;
          }
        }
      };
      Object.defineProperties(fashion.prototype, obj);
    });
  }
}

module.exports = new fashion();
