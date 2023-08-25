import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  conversionTable: Record<string, Record<string, string>[]>;

  constructor() {
    this.conversionTable = CONVERSIONTABLE;
  }
}

export const CONVERSIONTABLE: Record<string, Record<string, string>[]> = {
  'CT No 1 English': [
    { CODE: '0' },
    { A: '1' },
    { E: '2' },
    { I: '3' },
    { N: '4' },
    { O: '5' },
    { T: '6' },
    { B: '70' },
    { C: '71' },
    { D: '72' },
    { F: '73' },
    { G: '74' },
    { H: '75' },
    { J: '76' },
    { K: '77' },
    { L: '78' },
    { M: '79' },
    { P: '80' },
    { Q: '81' },
    { R: '82' },
    { S: '83' },
    { U: '84' },
    { V: '85' },
    { W: '86' },
    { X: '87' },
    { Y: '88' },
    { Z: '89' },
    { FIG: '90' },
    { '.': '91' },
    { ':': '92' },
    { '': '93' },
    { '': '94' },
    { '+': '95' },
    { '-': '96' },
    { '=': '97' },
    { REQ: '98' },
    { SPC: '99' },
  ],
};
    
    






