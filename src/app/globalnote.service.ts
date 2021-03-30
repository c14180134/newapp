import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalnoteService {
  private object : obj;
  private myarray: any[] = new Array<object>();
  private counts=0
  constructor() { 
   
  }

  addnote1(jdl : string,isi:string,tgl :Date){
    let temp : obj ={
      id:this.counts,
      judul:jdl,
      isi:isi,
      date:tgl,
      fav:false
    }
      this.myarray.push(temp)
      this.counts = this.counts+1
  }

  getobj(index:number){
    return this.myarray[index]
  }

  editnote(index:number,juduls:String,isis:string){
    this.myarray[index].judul=juduls
    this.myarray[index].isi=isis
  }

  makefav(index:number){
    this.myarray[index].fav=true
    console.log(this.myarray[index].fav)
  }
  unfavs(index : number){
    this.myarray[index].fav=false
  }
  getjudul(id:number){
    return this.myarray[id].judul
  }
  getisi(id:number){
    return this.myarray[id].isi
  }
  getnote(){
    return this.myarray
  }

}

export class obj{

  id: number
  judul:string;
  isi:string;
  date : Date;
  fav:Boolean;  

}
