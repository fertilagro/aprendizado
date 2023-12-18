export class CidadeModel {
    constructor(
      public id?: string,
      public nome?: string,
      public estado?: string
    ) { }

    static fromJson(jsonData: any): CidadeModel {
      return Object.assign(new CidadeModel(), jsonData);
    }
}
