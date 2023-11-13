export class Usuario{

    constructor(
      public ID_Usuario: number,
      public Nombre: string="",
      public Email: string="",
      public Password: string="",
      public SaldoPesos: number=0,
      public SaldoDolares: number=0,
   ) {}

    }
