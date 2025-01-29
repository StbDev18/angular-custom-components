import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryNgSelectExampleComponent } from './library-ng-select-example.component';

describe('LibraryNgSelectExampleComponent', () => {
  let component: LibraryNgSelectExampleComponent;
  let fixture: ComponentFixture<LibraryNgSelectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryNgSelectExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryNgSelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
