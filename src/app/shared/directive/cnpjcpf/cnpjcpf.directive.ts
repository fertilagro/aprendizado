// cpf-cnpj-mask.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Directive({
  selector: '[CpfCnpjMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: CnpjCpfMask,
    multi: true
  }]
})
export class CnpjCpfMask {

  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event): void {
    const value = this.el.nativeElement.value.replace(/\D/g, '');

    if (value.length === 11) {
      this.control.control.setValue(this.formatCpf(value));
    } else if (value.length === 14) {
      this.control.control.setValue(this.formatCnpj(value));
    }
  }

  private formatCpf(value: string): string {
    // Implemente a lógica de formatação para CPF aqui
    // Exemplo: 123.456.789-09
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }

  private formatCnpj(value: string): string {
    // Implemente a lógica de formatação para CNPJ aqui
    // Exemplo: 12.345.678/0001-90
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
}
