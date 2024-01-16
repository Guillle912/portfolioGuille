import { Component, inject } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  projectService = inject(ProjectService);

  toggleModo(){
    this.projectService.toggleModo();
  }
}
