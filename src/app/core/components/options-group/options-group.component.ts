import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IOptions } from '../../interfaces/options.interface';
import { OptionsService } from '../../services/options.service';

@Component({
  selector: 'app-options-group',
  templateUrl: './options-group.component.html',
  styleUrls: ['./options-group.component.scss']
})
export class OptionsGroupComponent {

  public optionsState: IOptions = {
      cyrillic: true,
      latin: true,
      lowercase: true,
      uppercase: true,
      numbers: true,
      specsimbols: true,
  };

  @Output() optionsChanged = new EventEmitter<IOptions>();
  
  constructor(private options: OptionsService) { 
    options.changeOptions(this.optionsState);
  }

  ngOnInit(): void {}

  public setNewOption(option: {[kay: string] : boolean}): void {
    this.optionsState = {...this.optionsState, ...option};
    this.options.changeOptions({...this.optionsState, ...option})
  }

}
