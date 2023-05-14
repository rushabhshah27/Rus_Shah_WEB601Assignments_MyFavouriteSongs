import { Content } from "./content-interface";

export class ContentList {
  private contentArray: Content[];

  constructor() {
    this.contentArray = [];
  }

  public getContentArray(): Content[] {
    return this.contentArray;
  }

  public addContent(content: Content): void {
    this.contentArray.push(content);
  }

  public getContentCount(): number {
    return this.contentArray.length;
  }

  public getContentHTML(index: number): string {
    const content = this.contentArray[index];

    const imgHTML = `<img src="${content.imgURL}" alt="${content.title}" />`;

    return `
      <div>
        <h2>${content.title}</h2>
        <p>${content.description}</p>
        <p>Creator: ${content.creator}</p>
        ${imgHTML}
        <p>Type: ${content.type}</p>
      </div>
    `;
  }
}
