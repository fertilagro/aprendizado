import { PessoaModel } from '../../../../ger/pessoa/components/pessoa/model/pessoa.model';

export class AmostraModel {
  constructor(
    public id?: string,
    public propriedade?: string,
    public cliente?: PessoaModel,
    public solicitante?: string,
    public entrada?: Date,
    public saida?: Date,
    public descricaoAmostra?: string,
    public tipoAnalise?: string,
    public valor?: number,
    public observacao?: string
  ) { }

  static fromJson(jsonData: any): AmostraModel {
    return Object.assign(new AmostraModel(), jsonData);
  }
}
