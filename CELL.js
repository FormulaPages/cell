(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'module', 'formula-address-system'], factory);
  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    factory(exports, module, require('formula-address-system'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, mod, global.formulaAddressSystem);
    global.CELL = mod.exports;
  }
})(this, function (exports, module, _formulaAddressSystem) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  /* Structure for CELL reference
   */

  var CELL = (function () {

    /* Accepts a reference to sheet and cell index
     */

    function CELL(sheet, index) {
      _classCallCheck(this, CELL);

      if (sheet.constructor.name !== 'SHEET') {
        throw Error('sheet is expected to be SHEET class');
      }

      this.sheet = sheet;
      this.index = index;
    }

    _createClass(CELL, [{
      key: 'getAddr',

      /* Returns object with row/col
       */
      value: function getAddr() {
        return (0, _formulaAddressSystem.INDEX2ADDR)(this.cellIndex);
      }
    }]);

    return CELL;
  })();

  module.exports = CELL;
});
