import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { OwlModule } from 'ngx-owl-carousel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public url: string;
  public SlideOptions: {};

  constructor(
    private _projectService: ProjectService,
    private _OwlModule: OwlModule
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
    this.SlideOptions = { 
      items: 2, 
      dots: true, 
      nav: false, 
      autoplay: true, 
      autoplayHoverPause: true, 
      loop: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
    };
  }

  getProjects() {
    this._projectService.getProjects().subscribe(
      response => {
        if(response.projects) {
          this.projects = response.projects;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
