
export class PedidoModel {
  constructor(
    public id?: string,
  ) { }

  static fromJson(jsonData: any): PedidoModel {
    return Object.assign(new PedidoModel(), jsonData);
  }
}
