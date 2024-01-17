import { Component, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Project } from 'src/app/interfaces/project.interface';
import { ProjectService } from 'src/app/services/project.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  arrProjects: Project[] = [];
  cvUrl!: SafeResourceUrl;
  sanitizer = inject(DomSanitizer);

  projectService = inject(ProjectService);

  constructor(){
    this.arrProjects = this.projectService.getAllProjects();

    const pdfPath = 'assets/CV_guillermoVidal_fullstack.pdf';
    this.cvUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdfPath)
  }
}
