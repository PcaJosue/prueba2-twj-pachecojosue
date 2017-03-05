import { PastelModel } from '../pastel/pastel-model';
export class PasteleriaModel{
    public listaPastelerias:Array<PasteleriaModel>=[];
     pastel: Array<PastelModel>;
     nombre: String;
     ciudad: String;
     correo: String;

constructor( nombre:String,ciudad:string,correo:string,pastel:Array<PastelModel>){
if(!pastel){
    this.pastel=null;
}else{

this.pastel=pastel;}
this.nombre=nombre;
this.ciudad=ciudad;
this.correo=correo;
}




}
