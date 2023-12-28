export class Fkfield {
  label: string;
  value: any;

  constructor(vo: any) {
    if (vo !== null) {
      this.label = vo.labelFkfield;
      this.value = vo;
    }
  }
}
