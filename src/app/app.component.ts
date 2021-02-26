import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Camera, CameraResultType, Photo } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photoUrl: SafeUrl;
  showError = false;

  constructor(private sanitizer: DomSanitizer) {}

  async takePhoto() {
    try {
      const img: Photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        saveToGallery: true,
      })
  
      if (img.webPath) {
        const saveUrl = this.sanitizer.bypassSecurityTrustResourceUrl(img.webPath)
        this.photoUrl = saveUrl
      }
    } catch(error) {
      console.error(error);
    }
  }
}
