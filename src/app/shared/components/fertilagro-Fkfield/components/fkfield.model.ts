export class Fkfield {
  label: string;
  labelPersonalizado: string;
  value: any;

  constructor(vo: any) {
    if (vo !== null) {
      this.label = vo.labelFkfield;
      this.labelPersonalizado = vo.labelFkfieldPersonalizado;
      this.value = vo;
    }
  }
}
