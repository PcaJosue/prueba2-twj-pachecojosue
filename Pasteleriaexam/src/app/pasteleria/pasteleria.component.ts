import { Component, OnInit } from '@angular/core';
import {PasteleriaModel} from './pasteleria-model';
import {PastelModel} from '../pastel/pastel-model';

@Component({
  selector: 'app-pasteleria',
  templateUrl: './pasteleria.component.html',
  
})
export class PasteleriaComponent  {
 public listaPastelerias:Array<PasteleriaModel>=[];

   editElement:boolean=false;
   editNumber:number=0;
   formcrearPasteNumber:number=0;
   formListarPastelesNumber:number=0;
   formEditarPastelesPasteleria:number=0;
   formEditarPastelesPastel:number=0;
   formCrearPastel:boolean=false;
   formListarPasteles:boolean=false;
   formEditarPasteles:boolean=false;
   crearPasteleriaForm:boolean=false;
   listarPasteleriasForm:boolean=false;
   menu:boolean=true;
   public listaPastel:Array<PastelModel>;
    constructor() {
  
    }
    registrarPasteleria():void{
    this.crearPasteleriaForm=true;

  }
limpiarTodo():void{
this.editElement=false;
  this.editNumber=0;
   this.formcrearPasteNumber=0;
   this.formListarPastelesNumber=0;
   this.formEditarPastelesPasteleria=0;
   this.formEditarPastelesPastel=0;
   this.formCrearPastel=false;
   this.formListarPasteles=false;
   this.formEditarPasteles=false;
   this.crearPasteleriaForm=false;
   this.listarPasteleriasForm=false;
   this.menu=true;
  
}
  listarPastelerias():void{
    this.listarPasteleriasForm=true;
  }
aceptar():void{
this.limpiarTodo();

}
 onClick(nombre,ciudad,correo):void{
 let pasteles:Array<PastelModel>;
 pasteles= [];

this.listaPastelerias.push(new PasteleriaModel(nombre,ciudad,correo,pasteles));
console.log(this.listaPastelerias);
this.listarPasteleriasForm=true;
 }

borrar(id:number):void{
  this.listaPastelerias.splice(id,1);

 }
editar(id:number):void{
  this.limpiarTodo();
this.editElement=true;
this.editNumber=id;

}
edit(nombre,ciudad,correo):void{

this.listaPastelerias[this.editNumber].nombre=nombre;
this.listaPastelerias[this.editNumber].ciudad=ciudad;
this.listaPastelerias[this.editNumber].correo=correo;
this.editNumber=0;
this.editElement=false;

}
crearPastelform(formcrearPasteNumber):void{
 this.formCrearPastel=true;
this.formcrearPasteNumber=formcrearPasteNumber;

}
crearPastel(nombrePastel,tiempoElaboracion,urlFoto):void{
  this.limpiarTodo();
 this.listaPastelerias[this.formcrearPasteNumber].pastel.push(new PastelModel(nombrePastel,tiempoElaboracion,urlFoto)); 
this.formCrearPastel=false;
this.formcrearPasteNumber=0;

}
listarPastelesForm(id:number):void{
console.log(this.listaPastelerias[id].pastel);
this.formListarPasteles=true;
this.formListarPastelesNumber=id;
}
listarPastelesListo():void{
  this.limpiarTodo();
this.formListarPasteles=false;
this.formListarPastelesNumber=0;

}

borrarPastel(idPasteleria:number,idPastel:number):void{
  this.listaPastelerias[idPasteleria].pastel.splice(idPastel,1);
  this.listarPastelesListo();
}
editarPasteleriaForm(idPasteleria:number,idPastel:number):void{
  
this.formEditarPasteles=true;
this.formEditarPastelesPasteleria=idPasteleria;
this.formEditarPastelesPastel=idPastel;

this.listaPastel=this.listaPastelerias[idPasteleria].pastel;
}
editarPastel(nombre:string,tiempo:number,url:string):void{
this.listaPastel[this.formEditarPastelesPastel].nombre=nombre;
this.listaPastel[this.formEditarPastelesPastel].tiempoDeElaboracion=tiempo;
this.listaPastel[this.formEditarPastelesPastel].urlFoto=url;

this.formEditarPastelesPasteleria=0;
this.formEditarPastelesPastel=0;
this.formEditarPasteles=false;
this.listaPastel=[];


}


}
