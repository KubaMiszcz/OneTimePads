import { Injectable } from '@angular/core';
import { ICharCode, IConversionTable } from '../models/conversion-table';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  conversionTables: IConversionTable[] = [];

  constructor() {
    this.conversionTables.push(CONVERSIONTABLES[0]);
  }
}

export const WORD_CODESxxxx: ICharCode[] = [ //how to name it
  { char: 'MISSION', code: '123' },
  { char: 'TANK', code: '124' },
];

export const CONVERSIONTABLES: IConversionTable[] = [
  {
    name: 'CT No1 Polish',
    values: [
      { char: 'A', code: '0' },
      { char: 'I', code: '1' },
      { char: 'O', code: '2' },
      { char: 'Z', code: '3' },
      { char: 'N', code: '4' },

      { char: 'B', code: '50' },
      { char: 'C', code: '51' },
      { char: 'D', code: '52' },
      { char: 'E', code: '53' },
      { char: 'F', code: '54' },
      { char: 'G', code: '56' },
      { char: 'H', code: '57' },
      { char: 'J', code: '58' },
      { char: 'K', code: '59' },

      { char: 'L', code: '60' },
      { char: 'Ł', code: '61' },
      { char: 'M', code: '62' },
      { char: 'N', code: '63' },
      { char: 'O', code: '64' },
      { char: 'Ó', code: '65' },
      { char: 'P', code: '67' },
      { char: 'Q', code: '68' },
      { char: 'R', code: '69' },

      { char: 'S', code: '70' },
      { char: 'Ś', code: '71' },
      { char: 'T', code: '72' },
      { char: 'U', code: '73' },
      { char: 'W', code: '74' },
      { char: 'V', code: '75' },
      { char: 'X', code: '76' },
      { char: 'Y', code: '78' },
      { char: 'Z', code: '79' },

      { char: 'CR', code: '80' },
      { char: 'LETTERS', code: '81' },
      { char: 'DIGITS', code: '82' },
      { char: ' ', code: '83' },
      { char: 'CODE', code: '84' },
      { char: 'RPT', code: '85' },
      { char: 'Ź', code: '86' },
      { char: 'Ż', code: '87' },
      { char: '.', code: '89' },

      { char: ':', code: '90' },
      { char: ',', code: '91' },
      { char: '-', code: '92' },
      { char: '/', code: '93' },
      { char: '(', code: '94' },
      { char: ')', code: '95' },
      { char: '+', code: '96' },
      { char: '=', code: '97' },
      { char: '"', code: '98' },

      { char: '0', code: '00' },
      { char: '1', code: '11' },
      { char: '2', code: '22' },
      { char: '3', code: '33' },
      { char: '4', code: '44' },
      { char: '5', code: '55' },
      { char: '6', code: '66' },
      { char: '7', code: '77' },
      { char: '8', code: '88' },
      { char: '9', code: '99' },
    ],
  },
  {
    name: 'CT No 1 English',
    values: [
      { char: 'A', code: '1' },
      { char: 'E', code: '2' },
      { char: 'I', code: '3' },
      { char: 'N', code: '4' },
      { char: 'O', code: '5' },
      { char: 'T', code: '6' },
      { char: 'B', code: '70' },
      { char: 'C', code: '71' },
      { char: 'D', code: '72' },
      { char: 'F', code: '73' },
      { char: 'G', code: '74' },
      { char: 'H', code: '75' },
      { char: 'J', code: '76' },
      { char: 'K', code: '77' },
      { char: 'L', code: '78' },
      { char: 'M', code: '79' },
      { char: 'P', code: '80' },
      { char: 'Q', code: '81' },
      { char: 'R', code: '82' },
      { char: 'S', code: '83' },
      { char: 'U', code: '84' },
      { char: 'V', code: '85' },
      { char: 'W', code: '86' },
      { char: 'X', code: '87' },
      { char: 'Y', code: '88' },
      { char: 'Z', code: '89' },
      { char: 'FIG', code: '90' },
      { char: '.', code: '91' },
      { char: ',', code: '92' },
      { char: '', code: '93' },
      { char: '', code: '94' },
      { char: '+', code: '95' },
      { char: '-', code: '96' },
      { char: '=', code: '97' },
      { char: 'REQ', code: '98' },
      { char: ' ', code: '99' },
    ],
  },
];
