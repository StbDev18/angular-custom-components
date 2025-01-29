import { Component } from '@angular/core';
import { LibrariesSidebarComponent } from './components/libraries-sidebar/libraries-sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-libraries',
  imports: [RouterModule, LibrariesSidebarComponent],
  templateUrl: './libraries.component.html',
  styleUrl: './libraries.component.scss'
})
export class LibrariesComponent {

}
