export class Cliente {
   public nombre : string;
   public apellido : string;
   public nro_doc : Number;
   public mail : string;
   public clave : string;
   public direccion : string;
   public path_foto : string;


   constructor(Nombre : string, Apellido : string, Nro_doc : Number, Mail : string, Clave : string, Path_foto : string)
   {
       this.nombre = Nombre;
       this.apellido = Apellido;
       this.nro_doc = Nro_doc;
       this.mail = Mail;
       this.clave = Clave;
       this.path_foto = Path_foto;
   }
}
