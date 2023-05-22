import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
// import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  // private contentList: ContentList;

  // constructor() {
  //   this.contentList = new ContentList();

  // Add content items to the list
  //   this.contentList.addContent({
  //     id: 1,
  //     title: "Despacito",
  //     description: "It is a reggaeton and Latin pop song composed in common time with lyrics about desiring a relationship, performed in a smooth and romantic way.",
  //     creator: "Erika Ender",
  //     imgURL: "https://i.scdn.co/image/ab67616d0000b2737fd4a4fb406b6421195d4c81",
  //     type: "Latin pop",
  //   });

  //   this.contentList.addContent({
  //     id: 2,
  //     title: "Let Me Love You",
  //     description: "The song is about how his girlfriend is about to leave their relationship, and Justin is trying to tell her not to give up, and let they're love grow. More of a social element.",
  //     creator: "Scott Storch",
  //     imgURL: "https://i.scdn.co/image/ab67616d0000b27317c14cb78745888be48cef78",
  //     type: "Romantic"
  //   });

  //   this.contentList.addContent({
  //     id: 3,
  //     title: "Perfect",
  //     description: "It describes a scenario where the couple is dancing on the green grass.",
  //     creator: "Ed Sheeran",
  //     imgURL: "https://i.scdn.co/image/ab67616d0000b273ab8b889c65305aaba18f504a",
  //     type: "Pop"
  //   });
  // }

  // public getContentList(): Content[] {
  //   return this.contentList.getContentArray();
  // }

  // public getContentCount(): number {
  //   return this.contentList.getContentCount();
  // }

  // public getContentHTML(index: number): string {
  //   return this.contentList.getContentHTML(index);
  // }
}
