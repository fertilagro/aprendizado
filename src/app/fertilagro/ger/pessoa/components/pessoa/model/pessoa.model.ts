import { CidadeModel } from "../../../../cidade/components/cidade/model/cidade.model";

export class PessoaModel {
  constructor(
    public id?: string,
    public razaoSocial?: string,
    public cnpj?: string,
    public telefone?: string,
    public estado?: string,
    public numEnd?: string,
    public endereco?: string,
    public cidade?: CidadeModel

  ) { }

  static fromJson(jsonData: any): PessoaModel {
    return Object.assign(new PessoaModel(), jsonData);
  }
}
