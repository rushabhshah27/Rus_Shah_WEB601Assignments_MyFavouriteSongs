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

  constructor(private SongServiceService: SongServiceService){}

  ngOnInit(){}
}
