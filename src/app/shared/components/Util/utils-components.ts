import { MessageService } from 'primeng/api';

export interface Permissao {
  rotina: string;
  subRotina: string;
}

export class Utils {

  static tratarErro(error: any, mensagem: MessageService, dialog?, okClick?, telaCritica?: boolean) {
    mensagem.clear();
    if (error.error == null) {
        console.log(error);
    } else if (error.status === 500) {
      mensagem.add({ severity: 'error', summary: `Error!`, detail: 'Erro inesperado!' });
    } else if (error.status === 400) {
        console.error(error);
        mensagem.add({ severity: 'error', summary: `Error!`, detail: 'Erro inesperado!' });
    }
  }

}
