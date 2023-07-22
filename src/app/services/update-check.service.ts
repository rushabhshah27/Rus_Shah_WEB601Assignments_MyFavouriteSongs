import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root',
})
export class UpdateCheckService {
  constructor(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        const song = document.createElement('div');
        song.innerHTML =
          'New version available. Click to update!';
        song.style.cssText = `
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 12px;
          background-color: #333;
          color: #fff;
          text-align: center;
          cursor: pointer;
        `;

        song.addEventListener('click', () => {
          window.location.reload();
        });

        document.body.appendChild(song);
      });
    }
  }
}
