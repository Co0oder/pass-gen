import { Component, ViewChild, ElementRef } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GeneratorService } from './core/services/generator.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pass-gen';
  public secret: string;
  public link: string;
  @ViewChild('mat-card') public card: ElementRef;

  constructor(
    private gennerator: GeneratorService
  ) {}

  public generate(): void {
    this.gennerator.generatePassword(this.link,this.secret);
  }
}
