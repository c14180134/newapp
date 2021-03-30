import { Component, OnInit } from '@angular/core';
import { GlobalnoteService } from '../globalnote.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-halaman-baru',
  templateUrl: './halaman-baru.page.html',
  styleUrls: ['./halaman-baru.page.scss'],
})
export class HalamanBaruPage implements OnInit {
  
  
  constructor(private global:GlobalnoteService,public router : Router) { }
  private object : obj;
  private myarray: any[] = new Array<object>();
  ngOnInit() {
    this.myarray = this.global.getnote()
  }
  favourite(ind : number){
    console.log(ind)
    this.global.makefav(ind)
  }
  unfav(ind : number){
    this.global.unfavs(ind)
  }
  edits(idnote:number){
    this.router.navigate(['/halaman-edit', idnote]);
  }

}

export class obj{
  id : number
  judul:string;
  isi:string;
  date : Date;
  fav:Boolean;
}
