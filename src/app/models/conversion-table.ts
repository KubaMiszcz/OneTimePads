export interface IConversionTable {
  name: string;
  values: ICharCode[];
}

export interface ICharCode {
  char: string;
  code: string;
}

export interface IWordCode {
  word: string;
  code: string;
}

export interface ICodeBook{
  name: string;
  values: IWordCode[];
};
