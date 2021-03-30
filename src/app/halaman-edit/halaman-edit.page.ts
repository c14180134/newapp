import { Component, OnInit } from '@angular/core';
import { GlobalnoteService } from '../globalnote.service';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-halaman-edit',
  templateUrl: './halaman-edit.page.html',
  styleUrls: ['./halaman-edit.page.scss'],
})
export class HalamanEditPage implements OnInit {
  idnotes:any
  judul:string
  isi:string
  constructor(private global:GlobalnoteService,public router : Router,public route : ActivatedRoute) { 
    this.idnotes = this.route.snapshot.paramMap.get('idnote');
  }
  
  
  
  
  ngOnInit() {
    this.judul=this.global.getjudul(this.idnotes)
    this.isi=this.global.getisi(this.idnotes)
  }

  commit(tit:string,des:string){
    this.global.editnote(this.idnotes,tit,des)
  }
  
}
