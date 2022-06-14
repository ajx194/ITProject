import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from 'ngx-lightbox';
import { NgImageSliderModule } from 'ng-image-slider';
import {IvyCarouselModule} from 'angular-responsive-carousel';

import { DialogContentDialog, HomeComponent, SignInDialog } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { QuoteComponent } from './quote/quote.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { BackendService } from './backend.service';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { QuoteRequestsComponent } from './admin/quote-requests/quote-requests.component';
import { EnquiryMessageComponent } from './admin/enquiry-message/enquiry-message.component';
import { MatTableModule } from '@angular/material/table';
import { UserComponent } from './user/user.component' 



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    QuoteComponent,
    TestimonialsComponent,
    GalleryComponent,
    UiModalComponent,
    DialogContentDialog,
    SignInDialog,
    UserDetailsComponent,
    QuoteRequestsComponent,
    EnquiryMessageComponent,
    UserComponent,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    QuoteComponent,
    TestimonialsComponent,
    GalleryComponent,
    NgbModule,
    EnquiryMessageComponent,
    UserDetailsComponent,
    QuoteRequestsComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    LightboxModule,
    NgImageSliderModule,
    IvyCarouselModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,

  ],
  providers: [
    BackendService
  ]
})
export class SectionsModule { }
