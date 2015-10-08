import {INDEX2ADDR} from 'formula-address-system';

/* Structure for CELL reference
 */
export default class CELL {

  /* Accepts a reference to sheet and cell index
   */
  constructor(sheet, index) {
    if (sheet.constructor.name !== 'SHEET') {
      throw Error('sheet is expected to be SHEET class');
    }
    
    this.sheet = sheet;
    this.index = index;
  }

  /* Returns object with row/col
   */
  getAddr() {
    return INDEX2ADDR(this.cellIndex);
  }

}
