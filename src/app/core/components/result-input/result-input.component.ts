import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GeneratorService } from '../../services/generator.service';

@Component({
  selector: 'app-result-input',
  templateUrl: './result-input.component.html',
  styleUrls: ['./result-input.component.scss']
})
export class ResultInputComponent {
  public visibility = false;
  public value = 'password';

  constructor(
    private generator: GeneratorService,
    private toastr: ToastrService
    ) {
    this.generator.passObservable().subscribe(password => {
      this.value = password;
    })
   }

  public toggleVisibility(): void {
    this.visibility = !this.visibility;
  }

  public copied() {
    this.toastr.success('Password copied to clipboard');
  }
}
