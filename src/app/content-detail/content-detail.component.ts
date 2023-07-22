import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ActivatedRoute } from '@angular/router';
import { SongServiceService } from '../services/song-service.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};
  defaultSong: string = '/assets/images/Song.jpg';

  constructor(private route:ActivatedRoute, private SongServiceService:SongServiceService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.SongServiceService.getSongById(this.id).subscribe(song => {
        this.content = song;
      })
    });
  }

  handleClick(content: Content){
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }
}
