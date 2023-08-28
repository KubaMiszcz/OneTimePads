import { IConversionTable } from '../models/conversion-table';
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

    [...message].forEach((c) => {
      convertedMessage +=
        charTable.find((v) => v.char.toLowerCase() === c.toLowerCase())?.code ??
        `<${c}>`;
    });

    return convertedMessage;
  }

  deconvertMessage(message: string): string {
    let deconvertedMessage = '';

    for (let idx = 0; idx < message.length; idx++) {
      //single digit code
      let code = message[idx];
      let char = this.findChar(code);

      if (!!char) {
        deconvertedMessage += char;
        console.log(code);
        continue;
      }
      
      //two digit code
      code += message[idx + 1];
      idx++;
      char = this.findChar(code);
      
      if (!!char) {
        console.log(code);
        deconvertedMessage += char;
        continue;
      }
      
      console.log(code);
      deconvertedMessage += `<${code}>`;
    }

    return deconvertedMessage;
  }

  findChar(code: string): string {
    let charTable = this.currentConversionTable.values;
    return (
      charTable.find((v) => v.code.toLowerCase() === code.toLowerCase())
        ?.char ?? ''
    );
  }
}
