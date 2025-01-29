import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IMenuItem, menuItems } from 'app.menu';

@Component({
  selector: 'app-libraries-sidebar',
  imports: [RouterModule],
  templateUrl: './libraries-sidebar.component.html',
  styleUrl: './libraries-sidebar.component.scss'
})
export class LibrariesSidebarComponent {

  private _menuLibraries = signal<IMenuItem[]>(menuItems.find((i) => i.label === 'Libraries')?.subMenu || []);
  public menuLibraries = computed(() => this._menuLibraries());

}
