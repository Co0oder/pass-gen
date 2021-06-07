import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-site-input',
  templateUrl: './site-input.component.html',
  styleUrls: ['./site-input.component.scss']
})
export class SiteInputComponent {
  @Output() link = new EventEmitter<string>();
}
