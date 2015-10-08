var assert = require('assert');
var cell = require('./CELL');
var sheet = require('formula-sheet');

describe('cell', function() {
  it('should accept a sheet and a cell index', function() {
    var c = new cell(new sheet(), 0);
    assert( c.index === 0 );
    c = new cell(new sheet(), 100);
    assert( c.index === 100 );
  });
});
