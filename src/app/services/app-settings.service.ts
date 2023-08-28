import { Injectable } from '@angular/core';
import { IConversionTable } from '../models/conversion-table';

@Injectable({
  providedIn: 'root',
})
export class AppSettingsService {
  conversionTables: IConversionTable[] = [];

  constructor() {
    this.conversionTables.push(CONVERSIONTABLES[0]);
  }
}

export const CONVERSIONTABLES: IConversionTable[] = [
  {
    name: 'CT No1 Polish',
    values: [
      { key: 'A', value: '0' },
      { key: 'i', value: '1' },
      { key: 'o', value: '2' },
      { key: 'z', value: '3' },
      { key: 'n', value: '4' },

      { key: 'b', value: '50' },
      { key: 'c', value: '51' },
      { key: 'd', value: '52' },
      { key: 'e', value: '53' },
      { key: 'f', value: '54' },
      { key: 'g', value: '56' },
      { key: 'h', value: '57' },
      { key: 'j', value: '58' },
      { key: 'k', value: '59' },

      { key: 'l', value: '60' },
      { key: 'ł', value: '61' },
      { key: 'm', value: '62' },
      { key: 'n', value: '63' },
      { key: 'o', value: '64' },
      { key: 'ó', value: '65' },
      { key: 'p', value: '67' },
      { key: 'q', value: '68' },
      { key: 'r', value: '69' },

      { key: 's', value: '70' },
      { key: 'ś', value: '71' },
      { key: 't', value: '72' },
      { key: 'u', value: '73' },
      { key: 'w', value: '74' },
      { key: 'v', value: '75' },
      { key: 'x', value: '76' },
      { key: 'y', value: '78' },
      { key: 'z', value: '79' },

      { key: 'CR', value: '80' },
      { key: 'LETTERS', value: '81' },
      { key: 'FIGURES', value: '82' },
      { key: 'SPACE', value: '83' },
      { key: 'CODE', value: '84' },
      { key: 'RPT', value: '85' },
      { key: 'ź', value: '86' },
      { key: 'ż', value: '87' },
      { key: '.', value: '89' },

      { key: ':', value: '90' },
      { key: ',', value: '91' },
      { key: '-', value: '92' },
      { key: '/', value: '93' },
      { key: '(', value: '94' },
      { key: ')', value: '95' },
      { key: '+', value: '96' },
      { key: '=', value: '97' },
      { key: '"', value: '98' },

      { key: '0', value: '00' },
      { key: '1', value: '11' },
      { key: '2', value: '22' },
      { key: '3', value: '33' },
      { key: '4', value: '44' },
      { key: '5', value: '55' },
      { key: '6', value: '66' },
      { key: '7', value: '77' },
      { key: '8', value: '88' },
      { key: '9', value: '99' },
    ],
  },
  {
    name: 'CT No 1 English',
    values: [
      { key: 'A', value: '1' },
      { key: 'E', value: '2' },
      { key: 'I', value: '3' },
      { key: 'N', value: '4' },
      { key: 'O', value: '5' },
      { key: 'T', value: '6' },
      { key: 'B', value: '70' },
      { key: 'C', value: '71' },
      { key: 'D', value: '72' },
      { key: 'F', value: '73' },
      { key: 'G', value: '74' },
      { key: 'H', value: '75' },
      { key: 'J', value: '76' },
      { key: 'K', value: '77' },
      { key: 'L', value: '78' },
      { key: 'M', value: '79' },
      { key: 'P', value: '80' },
      { key: 'Q', value: '81' },
      { key: 'R', value: '82' },
      { key: 'S', value: '83' },
      { key: 'U', value: '84' },
      { key: 'V', value: '85' },
      { key: 'W', value: '86' },
      { key: 'X', value: '87' },
      { key: 'Y', value: '88' },
      { key: 'Z', value: '89' },
      { key: 'FIG', value: '90' },
      { key: '.', value: '91' },
      { key: ',', value: '92' },
      { key: '', value: '93' },
      { key: '', value: '94' },
      { key: '+', value: '95' },
      { key: '-', value: '96' },
      { key: '=', value: '97' },
      { key: 'REQ', value: '98' },
      { key: ' ', value: '99' },
    ],
  },
];
