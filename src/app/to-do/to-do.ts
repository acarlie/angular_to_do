export class ToDo {
  id: number;
  title = '';
  complete = false;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
