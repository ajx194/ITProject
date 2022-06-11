import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {IAlbum, IEvent, Lightbox, LIGHTBOX_EVENT, LightboxConfig, LightboxEvent} from 'ngx-lightbox';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() albums: Array<IAlbum>;
  public subscription: Subscription;

  constructor(private lightbox: Lightbox, private lightboxEvent: LightboxEvent, private lighboxConfig: LightboxConfig, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {}



}
