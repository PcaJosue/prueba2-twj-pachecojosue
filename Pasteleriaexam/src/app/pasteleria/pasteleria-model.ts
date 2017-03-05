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
public setListaPastelerias(nombre:string,ciudad:string,correo:string,pastel:Array<PastelModel>):void{
 
this.listaPastelerias.push(new PasteleriaModel(nombre,ciudad,correo,pastel));

}



public getListaPastelerias():Array<PasteleriaModel>{

return this.listaPastelerias;

}



}
