import { Component } from '@angular/core';
import { GlobalnoteService } from '../globalnote.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  varNew : string = "Contoh String Baru"
  tanggal
  title
  description
  notes = [];
  constructor(private global:GlobalnoteService) {}
  public addnotes(juduls: string, isis: string) {
    this.notes.push({ id: this.notes.length + 1, judul: juduls, isi: isis });
    localStorage.setItem("notes", JSON.stringify(this.notes));
  }
  public savenotes(){
    this.global.addnote1(this.tanggal,this.title,this.description);
  }
}
