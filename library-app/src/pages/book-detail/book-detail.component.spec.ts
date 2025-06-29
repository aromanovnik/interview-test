import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetail } from './book-detail.component';

describe('HomeComponent', () => {
  let component: BookDetail;
  let fixture: ComponentFixture<BookDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(BookDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
