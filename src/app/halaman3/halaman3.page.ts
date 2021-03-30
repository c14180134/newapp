import { Component, OnInit } from '@angular/core';
import { GlobalnoteService } from '../globalnote.service';

@Component({
  selector: 'app-halaman3',
  templateUrl: './halaman3.page.html',
  styleUrls: ['./halaman3.page.scss'],
})
export class Halaman3Page implements OnInit {
  private object : obj;
  private myarray: any[] = new Array<object>();
  constructor(private global:GlobalnoteService) { }

  ngOnInit() {
    this.myarray = this.global.getnote()
  }
  

}

export class obj{
  id : number
  judul:string;
  isi:string;
  date : Date;
  fav:Boolean;
}
