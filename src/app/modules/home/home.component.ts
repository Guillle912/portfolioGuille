import { Component, inject } from '@angular/core';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  arrProjects: Project[] = [];

  projectService = inject(ProjectService);

  constructor(){
    this.arrProjects = this.projectService.getAllProjects();
  }
}
