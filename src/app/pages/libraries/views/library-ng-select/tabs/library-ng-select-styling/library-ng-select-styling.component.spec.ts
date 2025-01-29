import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryNgSelectStylingComponent } from './library-ng-select-styling.component';

describe('LibraryNgSelectStylingComponent', () => {
  let component: LibraryNgSelectStylingComponent;
  let fixture: ComponentFixture<LibraryNgSelectStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryNgSelectStylingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryNgSelectStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
