export class Cliente {
   public nombre : string;
   public apellido : string;
   public nro_doc : Number;
   public mail : string;
   public clave : string;
   public direccion : string;
   public path_foto : any; //Le puse any ya que ahi voy a mandar el objeto File para manipularlo en la API

   
   //Constructor de Cliente
   constructor(Nombre : string, Apellido : string, Nro_doc : Number, Mail : string, Clave : string, Direccion : string,Path_foto : any)
   {
       this.nombre = Nombre;
       this.apellido = Apellido;
       this.nro_doc = Nro_doc;
       this.mail = Mail;
       this.clave = Clave;
       this.direccion = Direccion;
       this.path_foto = Path_foto;
   }
}
