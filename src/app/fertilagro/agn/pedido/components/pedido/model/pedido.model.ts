
export class PedidoModel {
  constructor(
    public id?: string,
    public data?: Date,
  ) { }

  static fromJson(jsonData: any): PedidoModel {
    return Object.assign(new PedidoModel(), jsonData);
  }
}
