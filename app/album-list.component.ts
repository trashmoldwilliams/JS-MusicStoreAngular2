import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: "album-list",
  inputs: ['albumList'],
  outputs: ['onAlbumSelect'],
  directives: [],
  pipes: [],
  template: `
  <div *ngFor="#album of albumList" (click)="albumClicked(album)" [class.selected]='album === selectedAlbum'>
    <h4> {{ album.name }} </h4>
    <h4> {{ album.artist }} </h4>
    <h4> {{ album.price }} </h4>
    <h4> {{ album.genre }} </h4>
  </div>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public onAlbumSelect: EventEmitter<Album>;
  public selectedAlbum: Album;
  constructor(){
    this.onAlbumSelect = new EventEmitter();
  }
  albumClicked(clickedAlbum: Album): void {
    console.log("child", clickedAlbum);
    this.selectedAlbum = clickedAlbum;
    this.onAlbumSelect.emit(clickedAlbum);
  }
}
