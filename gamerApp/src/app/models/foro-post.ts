export class ForoPost {
  constructor(
    public id: number,
    public titulo: string,
    public descripcion: string,
    public imagen?: string // opcional, URL base64 o path
  ) {}
}
