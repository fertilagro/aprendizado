export class PessoaModel {
  constructor(
    public id?: string,
  ) { }

  static fromJson(jsonData: any): PessoaModel {
    return Object.assign(new PessoaModel(), jsonData);
  }
}
