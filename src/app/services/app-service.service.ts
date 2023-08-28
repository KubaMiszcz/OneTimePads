import { IConversionTable } from '../models/conversion-table';
import { CONVERT_MODES } from '../models/modes.enum';
import { AppSettingsService } from './app-settings.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentConversionTable: IConversionTable;

  constructor(private appSettingsService: AppSettingsService) {
    this.currentConversionTable = appSettingsService.conversionTables[0];
  }

  convertMessage(message: string): string {
    let convertedMessage = '';
    let charTable = this.currentConversionTable.values;
    let mode = CONVERT_MODES.LETTERS;

    [...message].forEach((char) => {
      if (parseInt(char) && mode !== CONVERT_MODES.DIGITS) {
        mode = CONVERT_MODES.DIGITS;
        convertedMessage += this.getCodeByChar(CONVERT_MODES.DIGITS);
      }

      if (!parseInt(char) && mode !== CONVERT_MODES.LETTERS) {
        mode = CONVERT_MODES.LETTERS;
        convertedMessage += this.getCodeByChar(CONVERT_MODES.LETTERS);
      }

      convertedMessage += this.getCodeByChar(char);
      // convertedMessage +=' ';
    });

    return convertedMessage;
  }

  deconvertMessage(message: string): string {
    let deconvertedMessage = '';
    let mode = CONVERT_MODES.LETTERS.toString();

    for (let curpos = 0; curpos < message.length; curpos++) {
      let code = message[curpos] + message[curpos + 1];
      let newMode = this.getCharByCode(code);
      if (this.isCodeConversionMode(newMode)) {
        mode = newMode;
        curpos++;
        continue;
      }

      if (mode === CONVERT_MODES.LETTERS) {
        // //single digit code
        code = message[curpos];
        let char = this.getCharByCode(code);

        if (!!char) {
          deconvertedMessage += char;
          console.log(code);
          continue;
        }

        //two digit code
        code = message[curpos] + message[curpos + 1];
        curpos++;
        char = this.getCharByCode(code);

        if (!!char) {
          console.log(code);
          deconvertedMessage += char;
          continue;
        }
      }

      if (mode===CONVERT_MODES.DIGITS) {
        code = message[curpos] + message[curpos + 1];
        curpos++;
        let char = this.getCharByCode(code);

        if (!!char) {
          console.log(code);
          deconvertedMessage += char;
          continue;
        }
      }

      console.log(code);
      deconvertedMessage += `<${code}>`;
    }

    return deconvertedMessage;
  }

  isCodeConversionMode(mode: string) {
    let result =
      !!mode &&
      (mode === CONVERT_MODES.LETTERS ||
        mode === CONVERT_MODES.DIGITS ||
        mode === CONVERT_MODES.CODE);
    return result;
  }

  getCharByCode(code: string): string {
    let charTable = this.currentConversionTable.values;
    return (
      charTable.find((v) => v.code.toLowerCase() === code.toLowerCase())
        ?.char ?? ''
    );
  }

  getCodeByChar(char: string): string {
    let charTable = this.currentConversionTable.values;
    return (
      charTable.find((v) => v.char.toLowerCase() === char.toLowerCase())
        ?.code ?? ''
    );
  }
}
