
export class PessoaModel {
  constructor(
    public id?: string,
    public razaoSocial?: string,
    public cnpjCpf?: string,
    public telefone?: string,
    public estado?: string,
    public email?: string,
    public endereco?: string,
    public cidade?: any,
    public status?: string

  ) { }

  static fromJson(jsonData: any): PessoaModel {
    return Object.assign(new PessoaModel(), jsonData);
  }
}
