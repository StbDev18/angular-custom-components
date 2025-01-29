import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryNgSelectComponent } from './library-ng-select.component';

describe('LibraryNgSelectComponent', () => {
  let component: LibraryNgSelectComponent;
  let fixture: ComponentFixture<LibraryNgSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryNgSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryNgSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
