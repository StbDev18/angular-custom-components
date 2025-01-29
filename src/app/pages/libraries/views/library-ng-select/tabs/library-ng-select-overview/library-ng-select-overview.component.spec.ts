import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryNgSelectOverviewComponent } from './library-ng-select-overview.component';

describe('LibraryNgSelectOverviewComponent', () => {
  let component: LibraryNgSelectOverviewComponent;
  let fixture: ComponentFixture<LibraryNgSelectOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryNgSelectOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryNgSelectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
