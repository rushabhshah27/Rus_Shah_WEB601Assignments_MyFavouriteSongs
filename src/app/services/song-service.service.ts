import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  constructor() { }

  getSongs(): Observable<Content[]>
  {
    const songs = contents;
    return of(songs);
  }

  getSongById(id: number): Observable<any> {
    const song = contents.find(content => content.id === id);

    if (song) {
      return of(song);
    }
    return of("Invalid Id");
  }

}