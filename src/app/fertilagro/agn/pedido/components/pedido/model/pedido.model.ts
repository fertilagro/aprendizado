import { PessoaModel } from '../../../../../ger/pessoa/components/pessoa/model/pessoa.model';

export class PedidoModel {
  constructor(
    public id?: string,
    public data?: Date,
    public pessoa?: PessoaModel,
    public status?: string
  ) { }

  static fromJson(jsonData: any): PedidoModel {
    return Object.assign(new PedidoModel(), jsonData);
  }
}
