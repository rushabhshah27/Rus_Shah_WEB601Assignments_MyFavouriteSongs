import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: any[] = [
    { id: 1, 
      title: 'Despacito', 
      description: 'It is a reggaeton and Latin pop song composed in common time with lyrics about desiring a relationship, performed in a smooth and romantic way.', 
      creator: 'Erika Ender', 
      image: 'https://i.scdn.co/image/ab67616d0000b2737fd4a4fb406b6421195d4c81',
      type: 'Latin pop', 
      tags: ['LatinPop', 'MostViewedSong'] 
    },
    { id: 2, 
      title: 'Let Me Love You', 
      description: 'The song is about how his girlfriend is about to leave their relationship, and Justin is trying to tell her not to give up, and let they are love grow. More of a social element.', 
      creator: 'Scott Storch',
      image: 'https://i.scdn.co/image/ab67616d0000b27317c14cb78745888be48cef78',
      type: 'Romantic', 
      tags: ['RomanticSong', 'JustinBieber'] 
    },
    { id: 3, 
      title: 'Perfect', 
      description: 'It describes a scenario where the couple is dancing on the green grass.', 
      creator: 'Ed Sheeran',
      image: 'https://i.scdn.co/image/ab67616d0000b273ab8b889c65305aaba18f504a',
      type: 'Pop', 
      tags: ['RomanticSong', 'LoveSong'] 
    }
  ];

  logContentDetails(content: any) {
    console.log('Content ID:', content.id);
    console.log('Content Title:', content.title);
  }

}