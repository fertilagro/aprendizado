export class CidadeModel {
    constructor(
      public id?: string,
      public nome?: string,
      public estado?: string,
      public codigoIbge?: string
    ) { }

    static fromJson(jsonData: any): CidadeModel {
      return Object.assign(new CidadeModel(), jsonData);
    }
}
