import { CidadeModel } from "src/app/fertilagro/ger/cidade/components/cidade/model/cidade.model";

export class PessoaModel {
  constructor(
    public id?: string,
    public razaoSocial?: string,
    public cnpjCpf?: string,
    public telefone?: string,
    public email?: string,
    public endereco?: string,
    public cidade?: CidadeModel,
    public status?: string

  ) { }

  static fromJson(jsonData: any): PessoaModel {
    return Object.assign(new PessoaModel(), jsonData);
  }
}
