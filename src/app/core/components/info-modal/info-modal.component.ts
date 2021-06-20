import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.scss']
})
export class InfoModalComponent {
  public cliImage = '/assets/images/cli_version.png';
  public i1 = '/assets/images/instruction_1.png';
  public i2 = '/assets/images/instruction_2.png';
  constructor(
    public dialogRef: MatDialogRef<InfoModalComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
