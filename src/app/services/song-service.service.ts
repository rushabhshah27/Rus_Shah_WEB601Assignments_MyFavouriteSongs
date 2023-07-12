import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  constructor(private MessageService: MessageService) { }

  getSongs(): Observable<Content[]>
  {
    const songs = contents;
    this.MessageService.add("Content array loaded!");
    return of(songs);
  }

  getSongById(id: number): Observable<any> {
    const song = contents.find(content => content.id === id);

    if (song) {
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(song);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }

}