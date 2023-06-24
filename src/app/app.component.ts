import { Component, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { SongServiceService } from './services/song-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Rus_Shah_MyFavouriteSongs';
  songId:number = 8;
  oneSongById: any = {};

  constructor(private SongServiceService: SongServiceService){}

  ngOnInit(){
    this.findSongById();
  }

  findSongById(){
    this.SongServiceService.getSongById(this.songId).subscribe(result => {
      if (typeof result === "object"){
        this.oneSongById = result;
      }
    });
  }
}
