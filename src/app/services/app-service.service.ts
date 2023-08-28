import { ICodeBook, IConversionTable } from '../models/conversion-table';
import { CONVERT_MODES } from '../models/modes.enum';
import { AppSettingsService } from './app-settings.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  currentConversionTable: IConversionTable;
  currentCodeBook: ICodeBook;

  constructor(private appSettingsService: AppSettingsService) {
    this.currentConversionTable = appSettingsService.conversionTables[0];
    this.currentCodeBook = appSettingsService.codeBooks[0];
  }

  convertMessage(message: string): string {
    let convertedMessage = '';
    let wordList = message.split(' ');
    let space = this.getCodeByChar(' ');

    wordList.forEach((word) => {
      let codeWord = this.applyCodeBook(word);
      if (!!codeWord) {
        convertedMessage += this.getCodeByChar(CONVERT_MODES.CODE) + codeWord;
        console.log(convertedMessage);
      } else {
        // let mode = CONVERT_MODES.LETTERS;
        [...word].forEach((char) => {
          // if (parseInt(char) && mode !== CONVERT_MODES.DIGITS) {
          //   mode = CONVERT_MODES.DIGITS;
          //   convertedMessage += this.getCodeByChar(CONVERT_MODES.DIGITS);
          // }

          // if (!parseInt(char) && mode !== CONVERT_MODES.LETTERS) {
          //   mode = CONVERT_MODES.LETTERS;
          //   convertedMessage += this.getCodeByChar(CONVERT_MODES.LETTERS);
          // }

          convertedMessage += this.getCodeByChar(char);
          console.log(convertedMessage);
        });
      }
      convertedMessage += space;
      // console.log(convertedMessage);

      // convertedMessage += ' ';a
    });

    return convertedMessage;
  }

  applyCodeBook(word: string) {
    return this.currentCodeBook.values.find(
      (c) => c.word.toUpperCase() === word.toUpperCase()
    )?.code;
  }

  deconvertMessage(message: string): string {
    let deconvertedMessage = '';
    let mode = CONVERT_MODES.LETTERS;

    for (let curpos = 0; curpos < message.length; curpos++) {
      let code = message[curpos] + message[curpos + 1];
      let newMode = this.getCharByCode(code);
      if (this.isCodeConversionMode(newMode)) {
        console.log(newMode);
        mode = newMode as CONVERT_MODES;
        curpos++;
        continue;
      }

      if (mode === CONVERT_MODES.CODE) {
        code = message.substring(curpos, curpos + 3);
        curpos = curpos + 2;
        console.log('cpde', code);
        let codeWord =
          this.currentCodeBook.values.find((w) => w.code === code)?.word ?? '';

        if (!!codeWord) {
          deconvertedMessage += codeWord;
          mode = CONVERT_MODES.LETTERS;
          continue;
        }
      }

      if (mode === CONVERT_MODES.LETTERS) {
        // //single digit code
        code = message[curpos];
        if (parseInt(code) && code === message[curpos + 1]) {
          code += message[curpos + 1];
          curpos += 1;
        }

        let char = this.getCharByCode(code);

        if (!!char) {
          deconvertedMessage += char;
          continue;
        }

        //two digit code
        code = message[curpos] + message[curpos + 1];
        curpos++;
        char = this.getCharByCode(code);

        if (!!char) {
          deconvertedMessage += char;
          continue;
        }
      }

      // if (mode === CONVERT_MODES.DIGITS) {
      //   code = message[curpos] + message[curpos + 1];
      //   curpos++;
      //   let char = this.getCharByCode(code);

      //   if (!!char) {
      //     deconvertedMessage += char;
      //     continue;
      //   }
      // }

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

// convertMessage2222222222222222222222(message: string): string {
//   let convertedMessage = '';
//   let wordList = message.split(' ');

//   let mode = CONVERT_MODES.LETTERS;
//   [...message].forEach((char) => {
//     if (parseInt(char) && mode !== CONVERT_MODES.DIGITS) {
//       mode = CONVERT_MODES.DIGITS;
//       convertedMessage += this.getCodeByChar(CONVERT_MODES.DIGITS);
//     }

//     if (!parseInt(char) && mode !== CONVERT_MODES.LETTERS) {
//       mode = CONVERT_MODES.LETTERS;
//       convertedMessage += this.getCodeByChar(CONVERT_MODES.LETTERS);
//     }

//     convertedMessage += this.getCodeByChar(char);
//     // convertedMessage +=' ';
//   });

//   return convertedMessage;
// }
