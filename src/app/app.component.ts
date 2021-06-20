import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { InfoModalComponent } from './core/components/info-modal/info-modal.component';
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
    private gennerator: GeneratorService,
    public dialog: MatDialog
  ) {}

  public generate(): void {
    this.gennerator.generatePassword(this.link,this.secret);
  }

  public showInfo(): void {
    this.dialog.open(InfoModalComponent);
  }
}
