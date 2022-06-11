import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryMessageComponent } from './enquiry-message.component';

describe('EnquiryMessageComponent', () => {
  let component: EnquiryMessageComponent;
  let fixture: ComponentFixture<EnquiryMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquiryMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
