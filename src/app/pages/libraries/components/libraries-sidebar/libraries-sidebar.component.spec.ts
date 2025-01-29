import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrariesSidebarComponent } from './libraries-sidebar.component';

describe('LibrariesSidebarComponent', () => {
  let component: LibrariesSidebarComponent;
  let fixture: ComponentFixture<LibrariesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibrariesSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrariesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
