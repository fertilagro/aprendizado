export class PessoaModel {
  constructor(
    public id?: string,
    public razaoSocial?: string,
  ) { }

  static fromJson(jsonData: any): PessoaModel {
    return Object.assign(new PessoaModel(), jsonData);
  }
}
